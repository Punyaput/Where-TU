function openInfoBox() {
    closeFavoriteBox();
    closeFeedbackBox();
    favButtonToggle = false;
    feedbackToggle = false;

    if (favoriteList.includes(document.getElementById('info-text-name').textContent)) {
        $('#favorite-icon-yes').css('display', 'flex');
        $('#favorite-icon-no').css('display', 'none');
    }
    else {
        $('#favorite-icon-yes').css('display', 'none');
        $('#favorite-icon-no').css('display', 'flex');
    }
    
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Is Portrait
        $('.info-box-cover').css('transform', 'translateY(100svh)');
        $('.search-bar').css('transform', 'translateY(-100svh)');
        $('.result-box-cover').css('transform', 'translateY(-100svh)');
    } else {
        // Is Landscape
        $('.info-box-cover').css('transform', 'translateX(590px)');
        $('.search-bar').css('transform', 'translateX(410px)');
        $('.result-box-cover').css('transform', 'translateX(410px)');
    }
    $('.info-container').scrollTop(0);
}

function closeInfoBox() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Is Portrait
        $('.info-box-cover').css('transform', 'translateY(-100svh)');
        $('.search-bar').css('transform', 'translateY(0svh)');
        $('.result-box-cover').css('transform', 'translateY(0svh)');
    } else {
        // Is Landscape
        $('.info-box-cover').css('transform', 'translateX(-590px)');
        $('.search-bar').css('transform', 'translateX(0px)');
        $('.result-box-cover').css('transform', 'translateX(0px)');
    }

    // Hide all pins
    pinIsDown = false;
    $(document.getElementById(latestPinPointer)).css("opacity", "0");
    $(document.getElementById(latestPinPointer)).css("visibility", "hidden");
    $(document.getElementById(latestPinPointer)).css("transform", "translate(-830px, -610px)");
    latestPinPointer = "";
}

function showBuilding() {
    let pointer = document.getElementById('input-box').value;
    selectInput(assets[pointer].building)
}