"use strict";
/*
Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
Sample Input: sumArray([1, 2, 3, 4, 5]);
 Sample Output:15;
*/
{
    function sumArray(arrayOfNumber) {
        let sum = 0;
        for (let i = 0; i < arrayOfNumber.length; i++) {
            sum += arrayOfNumber[i];
        }
        return sum;
    }
    const arrayOfNumber = [1, 2, 3, 4, 5];
    console.log(sumArray(arrayOfNumber));
}
