"use strict";
{
    function countWordOpetations({ sentence, word }) {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        // Split sentence into words, ignoring extra spaces---->(/[\s,!:]+/)
        const words = lowerCaseSentence.split(/[\s,!:]+/);
        const Opetations = words.filter(word => word === lowerCaseWord).length;
        return Opetations;
    }
    const params = {
        sentence: "TypeScript is great. I love typeScript!",
        word: "typescript"
    };
    console.log(countWordOpetations(params));
}
