let favButtonToggle = false;

let favoriteList = getLocalFavorites();

function favoriteButton() {
    closeInfoBox();
    closeFeedbackBox();
    closeFavoriteBox();
    if (favButtonToggle == false) {
        openFavoriteBox();
        favButtonToggle = true;
        feedbackToggle = false;
    }
    else {
        favButtonToggle = false;
    }
}

function openFavoriteBox() {
    $('.favorite-box-looper').empty();
    boxToggled = 'favorite';
    $('.side-bar-button-favorite').css('color', 'green');
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Is Portrait
        $('.favorite-box-cover').css('transform', 'translateY(100svh)');
        $('.search-bar').css('transform', 'translateY(-100svh)');
        $('.result-box-cover').css('transform', 'translateY(-100svh)');
    } else {
        // Is Landscape
        $('.favorite-box-cover').css('transform', 'translateX(590px)');
        $('.search-bar').css('transform', 'translateX(410px)');
        $('.result-box-cover').css('transform', 'translateX(410px)');
    }
    $('.favorite-box-cover').scrollTop(0);
    // Loop favorite content
    for (let i = 0; i <= (favoriteList.length - 1) ; i++) {
        // Create a new div element and set its properties
        const newDiv = $('<div class="favorite-container" ' + 'onclick="selectInput(' + "'" + favoriteList[i] + "'"  + ')"></div>').text(favoriteList[i]);

        // Append the new div to an existing element (e.g., body or another container)
        $('.favorite-box-looper').append(newDiv);
    }
    if (favoriteList.length == 0) {
        $('.favorite-no-fav').css("display", "flex");
    }
    else {
        $('.favorite-no-fav').css("display", "none");
    }
}

function closeFavoriteBox() {
    boxToggled = 'none';
    $('.side-bar-button-favorite').css('color', '#FFFFFF');
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Is Portrait
        $('.favorite-box-cover').css('transform', 'translateY(-100svh)');
        $('.search-bar').css('transform', 'translateY(0svh)');
        $('.result-box-cover').css('transform', 'translateY(0svh)');
    } else {
        // Is Landscape
        $('.favorite-box-cover').css('transform', 'translateX(-590px)');
        $('.search-bar').css('transform', 'translateX(0px)');
        $('.result-box-cover').css('transform', 'translateX(0px)');
    }
}

function getLocalFavorites() {
    // Get favorites from local storage
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }

function addRemoveFavorite(item) {
    // Get the existing favorites from local storage
    // Add the new item if it isn't already in the list
    if (!favoriteList.includes(item)) {
      favoriteList.push(item);
    } else {
      favoriteList = favoriteList.filter(itemA => itemA !== item);
    }
    localStorage.setItem('favorites', JSON.stringify(favoriteList));

    if (favoriteList.includes(document.getElementById('info-text-name').textContent)) {
        $('#favorite-icon-yes').css('display', 'flex');
        $('#favorite-icon-no').css('display', 'none');
    }
    else {
        $('#favorite-icon-yes').css('display', 'none');
        $('#favorite-icon-no').css('display', 'flex');
    }
  }


