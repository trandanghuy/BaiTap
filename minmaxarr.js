let num = [1,33,5,6,7,5]

let max_val = num.reduce((acc, el) => (acc > el) ? acc : el);
let min_val = num.reduce((acc, el) => (acc < el) ? acc : el);

console.log("max =", max_val);
console.log("min =", min_val);


//hoặc

let number = [2,3,4,5,6,7];
let max = number[0];
let min = number[0];

for(var i=0; i <= number.length; i++){

    (max < number[i]) ? max = number[i] : max;




    (min > number[i]) ? min = number[i] : min;
}

console.log("so lon nhat la:", max);
console.log("so be nhat la:", min);