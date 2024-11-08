
{


    
/* 
Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
 */

interface Person {
    name: string;
    age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = { name: "Alice", age: 30 };


console.log(`The user name is: ${getProperty(person, "name")}`); 
console.log(`The user age is: ${getProperty(person, "age")}`);   

}