function receivesAFunction(myCallbackFunction) {
    myCallbackFunction();
}

function dextest() {
    console.log("dextest was called");
}

console.log("receivesAFunction");
console.log(receivesAFunction(dextest));

function returnsANamedFunction() {
    function myNamedFunction() {
        console.log("I am a named function")
    }

    return myNamedFunction;
}

console.log("returnsANamedFunction");
console.log(returnsANamedFunction());

function returnsAnAnonymousFunction() {
    return () => {
        console.log("This is an anonymous function");
    }
}

console.log("returnsAnAnonymousFunction");
console.log(returnsAnAnonymousFunction());

// receivesAFunction(returnsANamedFunction);

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday() {
//     exerciseRoutine(liftWeights);
// }

// Monday();
  
// function Tuesday() {
//     runFiveMiles();
//     swimFortyLaps();
// }
  
// function Wednesday() {
//     runFiveMiles();
//     runFiveMiles();
// }
  
// function Thursday() {
//     runFiveMiles();
//     liftWeights();
// }
  
// function Friday() {
//     runFiveMiles();
//     swimFortyLaps();
// }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }
  
// function liftWeights() {
//     console.log("Pump iron");
// }
  
// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }
  