window.history.pushState("","","");

let historyLog = [];
let flipper = 0;

window.addEventListener('popstate', goToPage);

function goToPage() {
  let pageName = historyLog[historyLog.length - 2];
  if (pageName == undefined || pageName == 'home') {
    closeFavoriteBox();
    closeFeedbackBox();
    closeInfoBox();
    favButtonToggle = false;
    feedbackToggle = false;
  }
  else if (pageName == 'favorite') {
    favoriteButton();
  }
  else if (pageName == 'feedback') {
    feedbackButton();
  }
  else {
    selectInput(pageName)
  }
  window.history.pushState("","","");

  historyLog.pop();
}

