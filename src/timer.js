function countdown(time, progressCallback, doneCallback) {
  progressCallback(time);
  setTimeout(function() {
    if( time > 1) {
      countdown(time-1, progressCallback, doneCallback);
    } else {
      doneCallback();
    }
  }, 1000);
}

module.exports = countdown;
