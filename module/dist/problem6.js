"use strict";
/*
Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

 Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
*/
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
const myProfile = { name: "Alice", age: 65, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26, email: "ssjoy43@gmail.com" }));