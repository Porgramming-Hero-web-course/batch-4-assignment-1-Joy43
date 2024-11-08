{
/* 
Write a TypeScript function countWordOpetations that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

Sample Input:
countWordOpetations("TypeScript is great. I love TypeScript!", "typescript");

Sample Output: 2;

*/
interface WordCounterMehodType {
    sentence: string;
    word: string;
}

function countWordOpetations({ sentence, word }: WordCounterMehodType): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    // Split sentence into words, ignoring extra spaces---->(/[\s,!:]+/)
    const words = lowerCaseSentence.split(/[\s,!:]+/);
    const Opetations = words.filter(word => word === lowerCaseWord).length;

    return Opetations;
}


const params: WordCounterMehodType = {
    sentence: "TypeScript is great. I love typeScript!", 
    word: "typescript"
};

console.log(countWordOpetations(params))
}