var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2*1000, 'That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}