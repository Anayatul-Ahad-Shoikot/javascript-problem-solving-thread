const find2Sum = (a, t) => {
    for(let i = 0; i < (a.length - 1); i++) {
        for(let j = i+1; j < (a.length); j++) {
            if(a[i]+a[j] == t){
                return [i, j];
            }
        }
    }
}

const num = [2,7,11,15];
console.log(find2Sum(num, 9));

