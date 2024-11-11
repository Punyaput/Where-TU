let feedbackToggle = false;

function feedbackButton() {
    closeInfoBox();
    closeFeedbackBox();
    closeFavoriteBox();
    if (feedbackToggle == false) {
        openFeedbackBox();
        feedbackToggle = true;
        favButtonToggle = false;
    }
    else {
        feedbackToggle = false;
    }
}

function openFeedbackBox() {
    $('.side-bar-button-feedback').css('color', '#7066e0');
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Is Portrait
        $('.feedback-box-cover').css('transform', 'translateY(100svh)');
        $('.search-bar').css('transform', 'translateY(-100svh)');
        $('.result-box-cover').css('transform', 'translateY(-100svh)');
    } else {
        // Is Landscape
        $('.feedback-box-cover').css('transform', 'translateX(590px)');
        $('.search-bar').css('transform', 'translateX(410px)');
        $('.result-box-cover').css('transform', 'translateX(410px)');
    }
    $('.feedback-box-cover').scrollTop(0);
    if (historyLog.indexOf('feedback') == -1) {
        historyLog.push('feedback')
    }
}

function closeFeedbackBox() {
    $('.side-bar-button-feedback').css('color', 'white');
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Is Portrait
        $('.feedback-box-cover').css('transform', 'translateY(-100svh)');
        $('.search-bar').css('transform', 'translateY(0svh)');
        $('.result-box-cover').css('transform', 'translateY(0svh)');
    } else {
        // Is Landscape
        $('.feedback-box-cover').css('transform', 'translateX(-590px)');
        $('.search-bar').css('transform', 'translateX(0px)');
        $('.result-box-cover').css('transform', 'translateX(0px)');
    }
}

