let numberX = 8;
let numberY = 12;

function boolenNum(numX, numY) 
{
    if (numX === 20) {
        return true; 
    }

    if (numY === 20) {
        return true; 
    }

    if (numX + numY <= 20) {
        return true;
    }

    else {
        return false;
    }
}

console.log(boolenNum(numberX, numberY));