{
/* 
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1
// Sample Input:
countWordOccurrences("I love typescript", "typescript");
// Sample Output:
1;
*/
interface WordCounterMehodType {
    sentence: string;
    word: string;
}

function countWordOpetations({ sentence, word }: WordCounterMehodType): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    // ignoring extra spaces---->(/[\s,!:]+/)
    // const words = lowerCaseSentence.split(/[\s,!:]+/);
    const words = lowerCaseSentence.split(/[\s,:]+/);
    const Opetations = words.filter(word => word === lowerCaseWord).length;

    return Opetations;
}


const params: WordCounterMehodType = {
    sentence: "I love typeScript", 
    word: "typescript"
};

console.log(countWordOpetations(params))
}