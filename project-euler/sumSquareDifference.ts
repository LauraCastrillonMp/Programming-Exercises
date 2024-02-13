/**
    The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385,

    The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)^2 = 55^2 = 3025,

    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sumSquareDifference(n: number): number {
    let sum = 0;
    let squareSum = 0;
    for (let i = 1; i <= n; i++) { // Start from 1 and go up to and including n
        sum += i;
        squareSum += i * i;
    }
    return sum * sum - squareSum;
}

console.log(sumSquareDifference(100));