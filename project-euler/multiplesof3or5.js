/*
    If we list all the natural numbers below that are multiples of 3 or 5, we get and 3, 5, 6 and 9. The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below 1000.
*/
function multiplesOf3or5(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(multiplesOf3or5(10));
console.log(multiplesOf3or5(1000));
