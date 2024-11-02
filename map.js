const map = document.getElementById('map');
const mapOuter = document.getElementById('map-container');
let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0; // Track position for translate
let scale = 1
let isAnimating = false;

// For pinch-to-zoom
let initialDistance = null;
let lastScale = 1;

// Function to update the map's transform
function updateTransform() {
    map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

// Dragging functionality
function startDrag(e) {
    isDragging = true;
    const { clientX, clientY } = e.type.includes('touch') ? e.touches[0] : e;
    startX = clientX - translateX;
    startY = clientY - translateY;
}

function drag(e) {
    if (!isDragging) return;
    if (!isAnimating) {
        requestAnimationFrame(() => {
            e.preventDefault();
            const { clientX, clientY } = e.type.includes('touch') ? e.touches[0] : e;
            translateX = clientX - startX;
            translateY = clientY - startY;
            updateTransform();
            isAnimating = false;
        });
        isAnimating = true;
    }
}

function endDrag() {
    isDragging = false;
}

mapOuter.addEventListener('wheel', function(e) {
    e.preventDefault(); // Prevent page from scrolling

    const zoomFactor = 0.1;
    const delta = Math.sign(e.deltaY); // Detect wheel direction
    scale = Math.min(Math.max(scale - delta * zoomFactor, 1), 4); // Limit zoom between 1 and 4

    updateTransform();
});

// Zooming functionality for pinch-to-zoom
function handlePinchStart(e) {
    if (e.touches.length === 2) {
        // Calculate the initial distance between the two fingers
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialDistance = Math.sqrt(dx * dx + dy * dy);
        lastScale = scale; // Save the current scale
    }
}

function handlePinchMove(e) {
    if (e.touches.length === 2 && initialDistance) {
        e.preventDefault();
        // Calculate the new distance between the two fingers
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const newDistance = Math.sqrt(dx * dx + dy * dy);

        // Calculate the scaling factor based on the change in distance
        const scaleFactor = newDistance / initialDistance;
        scale = Math.min(Math.max(lastScale * scaleFactor, 1), 4); // Set scale limits between 1 and 4
        updateTransform();
    }
}

function handlePinchEnd() {
    initialDistance = null; // Reset the initial distance
}

mapOuter.addEventListener('mousedown', startDrag);
mapOuter.addEventListener('mousemove', drag);
mapOuter.addEventListener('mouseup', endDrag);

mapOuter.addEventListener('touchstart', startDrag, { passive: false });
mapOuter.addEventListener('touchmove', drag, { passive: false });
mapOuter.addEventListener('touchend', endDrag);

mapOuter.addEventListener('touchstart', handlePinchStart, { passive: false });
mapOuter.addEventListener('touchmove', handlePinchMove, { passive: false });
mapOuter.addEventListener('touchend', handlePinchEnd);

// Reposition Map
function resetButton() {
    translateX = 0, translateY = 0;
    scale = 1;
    map.style.transform = `translate(0px, 0px) scale(1)`;
    console.log('reset-#map');
}

// Will-change handling
//////// TO DO