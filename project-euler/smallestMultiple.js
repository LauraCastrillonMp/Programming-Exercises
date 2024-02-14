/*
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function smallestMultiple(n) {
    var multiple = 1;
    for (var i = 2; i <= n; i++) {
        multiple = lcm(multiple, i);
    }
    return multiple;
}
console.log(smallestMultiple(10)); // Should output the smallest multiple for 1 to 10
console.log(smallestMultiple(20)); // Should output the smallest multiple for 1 to 20
