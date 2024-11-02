document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.getElementById("splash").style.opacity = '0';
        setTimeout(() => {document.getElementById("splash").style.display = 'none';}, 400);
    }, 2000);


})