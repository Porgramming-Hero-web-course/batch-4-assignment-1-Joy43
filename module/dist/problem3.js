"use strict";
{
    function countWordOpetations({ sentence, word }) {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        // ignoring extra spaces---->(/[\s,!:]+/)
        // const words = lowerCaseSentence.split(/[\s,!:]+/);
        const words = lowerCaseSentence.split(/[\s,:]+/);
        const Opetations = words.filter(word => word === lowerCaseWord).length;
        return Opetations;
    }
    const params = {
        sentence: "I love typeScript",
        word: "typescript"
    };
    console.log(countWordOpetations(params));
}
