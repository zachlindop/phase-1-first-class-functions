const { spy } = require("chai");

function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    console.log ('hey')
}

//function morningRoutine(exercise) {
  //  let breakfast;
  
    //if (exercise === liftWeights) {
   //   breakfast = "protein bar";
    //} else if (exercise === swimFortyLaps) {
   //   breakfast = "kale smoothie";
    //} else {
    //  breakfast = "granola";
    //}
    //exerciseRoutine(exercise);
    //return function () {
    //  console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    //};
  //} 