"use strict";
{
    function getProperty(obj, key) {
        return obj[key];
    }
    const person = { name: "Alice", age: 30 };
    console.log(`The user name is: ${getProperty(person, "name")}`);
    console.log(`The user age is: ${getProperty(person, "age")}`);
}