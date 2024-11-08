"use strict";
/*
Create a TypeScript function `removeDuplicates` that accepts an array of numbers and returns a new array with duplicates removed.
Preserve the original order of elements.
---->ts-node-dev --respawn --transpile-only ./module/src/problem2.ts
*/
function removeDuplicates(array) {
    return [...new Set(array)];
}
let array = [1, 2, 2, 3, 4, 4, 5];
let duplicatesRemoved = removeDuplicates(array);
console.log(duplicatesRemoved);
