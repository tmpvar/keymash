// this works by feeding data into the `keyboardEventHandler`
// and allowing consumers in a render/simulation loop to extract
//the state of every key at the current time up to a certain point
// in the past (as specified by `historyInMs`).

// Given a bounds on history to keep and a sampling rate
// prealloc a Uint16Array that will fit the entire history
// at the expected sampling rate.

function createKeyboard(historyInMs, samplingRateInMs, dateFn) {
  var dateFn = dateFn || Date.now;
  var slots = Math.ceil(historyInMs * samplingRateInMs);
  var buffer = new Uint16Array(slots);
  var pointer = 0;
  var lastTimeStep = dateFn();


  // track the current mask of keys being mashed
  var currentState = 0;

  // Used for tracking keypress
  var stateMask = 0;

  // expects a dom-like key{down,up,press} event
  // Inject events:
  // var kb = createKeyboard(1000, 30); // should keep ~34 samples
  // el.addEventListener('keydown', kb);
  function keyboardEventHandler(event) {
    // normalize keyCode into something usable

    // set current state

  }

  // Since things will never run at the expected rate ensure:
  // * faster than expected ticks do not move the pointer
  // * slower than expected ticks duplicate the data across as
  //   many slots as needed to fufull the current location in time.
  function timeStep() {
    var now = dateFn();
    var diff = now - lastTimeStep;
    if (diff > samplingRateInMs) {
      // move pointer, apply current state
      // TODO: potentially apply the current state across multiple
      //       indicies
    } else {

    }

    // reset current state
    currentState = 0;
  };

  // TODO: handle more than just a simple keyCode
  //  * 'Φ'.charCodeAt(0)
  function is(keyCode) {

  }

  // Return Uint16diff between the old set of keymashes and the
  // current
  function diff() {

  }

  keyboardEventHandler.tick = timeStep;
  keyboardEventHandler.is = timeStep;

  return keyboardEventHandler;
}
