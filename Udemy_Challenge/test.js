const calcAge = (birthyear) => {
    return 2037 - birthyear
}

const years = [1990, 1970, 1943, 2034, 2025]

console.log(years.map( x => calcAge(x)))