# kees

A simple module to track keyboard events over time

## install

`npm install kees`

## use

```javascript

var createKeyboard = require('kees');

// keep 1 second worth of historical data
var historyInMilliseconds = 1000;

// update samples every 30ms
var samplingRateInMilliseconds = 30;

var kb = createKeyboard(historyInMilliseconds, samplingRateInMilliseconds);

document.addEventListener('keydown', kb);
document.addEventListener('keyup', kb);
document.addEventListener('keypress', kb);


setInterval(function() {
  kb.tick();

  // test if the up arrow is pressed
  if (kb.down(38)) {
    console.log('up key is currently down');
  } else if (kb.last(10, 38)) {
    console.log('up key was down in the last 10ms');
  }

}, 30);

```

## license

[MIT](LICENSE.txt)
