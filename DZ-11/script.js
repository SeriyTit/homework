let a = [3, -12, 0, 4, 5, -8];

let b =[];
for (let i =0; i < a.length; i++) {
    if (a[i]>=0) b.push(a[i]);
}
console.log(b);

let c = a.filter(function(item) {
    return item >= 0;
});

console.log(c);

// ===========================================


let numbers = [3, -12, 0, 4, 5, -8];

let negNumbers = false;

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) ;
    negNumbers = true;
    break;
}
console.log(negNumbers);

let negNumbers2 = numbers.some(function (item) {
    return item < 0;
});
console.log(negNumbers2);
