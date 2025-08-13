
function isPalindrome(word) {
    let mid = word.length / 2
    let result = false
    for (let i = 0; i < mid ; i++) {
        if (word[i] != word[word.length - 1 - i]) {
            return console.log("No")
        }
    }
    console.log("Yes")
}


function isPalindromeAdvanced(word){
    console.log((word === word.split("").reverse().join("")) ? "Yes" : "No")
}


const word = "fox"
isPalindrome(word)
isPalindromeAdvanced(word)