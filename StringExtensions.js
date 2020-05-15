let sentence = "The quick dog brown fox jumps over the lazy dog.";

String.includes
let hasDog = sentence.includes("dog");
console.log(hasDog);
console.log(sentence.toLowerCase().includes("z"));

let myArray = ["Luke", "Dave", "Lucy"];
// console.log(myArray.includes("Luke"))

// String.indexOf
let dogFirstOccurence = sentence.indexOf("dog");
let dogSecondOccurence = sentence.indexOf("dog", dogFirstOccurence + 1);
let dogThirdOccurence = sentence.indexOf("dog", dogSecondOccurence + 1);
// console.log(dogFirstOccurence);
// console.log(dogSecondOccurence);
// console.log(dogThirdOccurence);

function countOccurences(stringToSearch, searchTerm) {
    let count = 0;
    let startIndex = 0;
    while (true) {
        let indexOfSearchTerm = stringToSearch.indexOf(searchTerm, startIndex);
        if (indexOfSearchTerm == -1) {
            break;
        }
        count++;
        startIndex = indexOfSearchTerm + 1
    }
    return count;
}
let countOfDog = countOccurences(sentence, "dog"); // Tells us how many times "dog" appears in the string sentence
// console.log(countOfDog);

let invalidIndex = sentence.indexOf("Luke");
// console.log(invalidIndex);

// String.substring

let input = "Name: Luke"
let pre = "Name: "
let name = input.substring(pre.length);
// console.log(name)

let indexOfFox = sentence.indexOf("fox");
// console.log(indexOfFox)

let mySmallerString = sentence.substring(20, 29);
// console.log(mySmallerString);

// String.split
let myWords = sentence.split(" ");
// console.log(myWords);

let myNums = "12, 19, 2, 51, 75, 164, 197".split(",");
console.log(myNums)