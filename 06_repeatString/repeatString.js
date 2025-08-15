const repeatString = function(str, numReps) {
    let finalStr = [];
    for(let i = 0; i < numReps; i++) {
        finalStr.push(str);
    }
    return finalStr.join("");
};

// Do not edit below this line
module.exports = repeatString;
