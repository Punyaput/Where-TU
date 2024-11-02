function submitFeedback() {
    Swal.fire({
        title: "Confirm feedback submission?",
        showDenyButton: true,
        confirmButtonText: "Confirm",
        denyButtonText: `Cancel`
      }).then((result) => {
        if (result.isConfirmed) {
          let feedbackContent = document.getElementById("feedbackElem").value;
          postFeedback(feedbackContent);
          Swal.fire("Feedback sent!", "", "success");
          document.getElementById("feedbackElem").value = '';
          feedbackToggle = false;
          closeFeedbackBox();
        } 
        else if (result.isDenied) {
        }
      });
}

function postFeedback(feedback) {

    const time = new Date().toLocaleString();
    const data = { time, feedback };
  
    fetch('https://script.google.com/macros/s/AKfycbw1vaBBHV8q9_BcE8o7QJLmUqmZKDnqMIHwMJBjXT2Y9k4glx8mz4KTPhe3pHuRwr4v/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',  // Bypass CORS
      body: JSON.stringify(data),
    })
}
