let x = "axfeVr1lpp*mzXqr!xdgb45hb".toLowerCase()

function sortWord(word){
    console.log(word.replace(/[^a-zA-z]/g, "").split("").sort().join(""))
}

sortWord(x)