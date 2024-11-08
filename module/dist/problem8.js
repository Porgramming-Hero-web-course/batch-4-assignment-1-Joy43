"use strict";
{
    function validateKeys(obj, keys) {
        return keys.every(key => key in obj);
    }
    const person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    console.log(validateKeys(person, ["name", "age"]));
    console.log(validateKeys(person, ["name", "email"]));
    console.log(validateKeys(person, ["name", "address"]));
}
