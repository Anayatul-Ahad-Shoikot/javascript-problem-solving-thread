/*
----------------------- 
In this code, I learned how to get and format time and date in JavaScript.
I collected them in different formats and then used string operations to transform them into cleaner, more readable outputs.



What I have learned from this problem:

1.  split()-    This method takes 2 argument separator & limit,
                works only for string,
                returns a new array, 
                do not change the original string,
                based on separator it split the string. 

2.  map()-      This method has a callback function inside it,
                iterate over each item of an iterable datatype,
                then can do operation of each item of an iterable.

3.  trim()-     this method is a string method,
                removes header and trailer white spaces


4.  replace()-  String method,
                replace anything from string as given argument

-----------------------
*/



// Note:    Returns local date&time in string formate. No need to add or substract GMT hours. 24 hours formate
// Output:  Tue Aug 12 2025 19:50:11 GMT+0600 (Bangladesh Standard Time)

let now1 = Date()
let now11 = Date().split(" ")

switch(now11[0]){

    case 'Sun':
        now11[0] = 'Sunday'
        break
    case 'Mon':
        now11[0] = 'Monday'
        break
    case 'Tue':
        now11[0] = 'Tuesday'
        break
    case 'Wed':
        now11[0] = 'Wednesday'
        break
    case 'Thu':
        now11[0] = 'Thursday'
        break
    case 'Fri':
        now11[0] = 'Friday'
        break
    case 'Sat':
        now11[0] = 'Saturday'
        break

}

let hour = parseInt(now11[4].split(":")[0])
let ampm = (hour >= 12) ? 'PM' : 'AM';


console.log(`Today is: ${now11[0]}`)
console.log(`Date: ${now11[2]}th ${now11[1]}, ${now11[3]}`)
console.log(`Time: ${now11[4]} ${ampm}`)
console.log("Time Zone: ", now11[6].replace(/[(]/g, ""))


/*-------------------------------------------------------------*/


// Note:    Returns local date&time based on system's language and region. No need to add or substract GMT hours. 12 hours formate
// Output:  8/12/2025, 7:46:01 PM

let now2 = new Date().toLocaleString()
now2 = now2.split(" ")
let now22 = now2[0].split("/").map( item => item.replace(/[,]/g, ""))

const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

console.log(`Today is: N/A`)
console.log(`Date: ${now22[1]}th ${monthList[now22[0] - 1]}, ${now22[2]}`)
console.log(`Time: ${now2[1]} ${now2[2]}`)
console.log("Time Zone: N/A")


/*-------------------------------------------------------------*/


// Note:    returns UTC date&time based on system's clock and timezone. Need to add or substract GMT hours. 24 hours formate
// Output:  2025-08-12T13:58:34.275Z
const now3 = new Date();

const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log(`Today is: ${dayList[now3.getDay()]}`)
console.log(`Date: ${now3.getDate()}th ${monthList[now3.getMonth() - 1]}, ${now3.getFullYear()}`)
console.log(`Time: ${now3.getHours()%12}:${now3.getMinutes()}:${now3.getSeconds()} ${(now3.getHours() >= 12) ? 'PM' : 'AM'}`)
console.log("Time Zone: N/A")