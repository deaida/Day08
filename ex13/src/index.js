// Only change code below this line
function randomRangeNumber(minNumber, maxNumber){
    return Math.floor(Math.random ()*(maxNumber - minNumber)  + minNumber );
}
console.log(randomRangeNumber(3,4));
// Only change code below this line
module.exports = randomRangeNumber;