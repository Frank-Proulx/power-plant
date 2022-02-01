import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { storeState } from './plant.js';
import { stateControl } from './plant.js';
import { changeState } from './plant.js';


const feedAndWater = changeState("soil", "water")(2, 4);
// const blueFood = changeState("soil")(5);
// const brightLight = changeState("light")(10);
// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

$('#feed').click(function() {
  const newState = stateControl(feedAndWater);
  $('#soil-value').text(`Soil: ${newState.soil}`);
  $('#water-value').text(`Water: ${newState.water}`);
});

// $('#hydrate').click(function() {
//   const newState = stateControl(superWater);
//   $('#water-value').text(`Water: ${newState.water}`);
// });

// $('#illuminate').click(function() {
//   const newState = stateControl(brightLight);
//   $('#light-value').text(`Light: ${newState.light}`);
// });


// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

$('#show-state').click(function() {
  // We just need to call stateControl() without arguments to see our current state.
  const currentState = stateControl();
  $('#soil-value').text(`Soil: ${currentState.soil}`);
});