let x = 10234

function reverseNumber(num) {
    console.log(Number((num + "").split("").reverse().join("")))
}


reverseNumber(x)