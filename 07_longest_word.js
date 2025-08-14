let x = "The Quick Brown Fox"

let maxCount = 0;
let maxWord = null;

x.split(" ").map( word => {
    if(word.length > maxCount) {
        maxCount = word.length;
        maxWord = word;
    }
});

console.log(maxWord);

