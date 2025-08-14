let sentence = "My name is Ahad. and I am a VERY good boy. i Can do this. "

sentence = sentence.split(".").map( word => {
        word = word.trim();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(". ")

console.log(sentence);
