function array1(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n>1;
}

var numberToCheck = 10;
if (array1(numberToCheck)) {
    console.log(numberToCheck + ' là số nguyên tố.');
} else {
    console.log(numberToCheck + ' không phải là số nguyên tố.');
}