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

2.  map()-      This method have a callback function inside it,
                iterate over each item of an iterable datatype,
                then can do operation of each item of an iterable.

3.  trim()-     this method is a string method,
                removes header and trailer white spaces
-----------------------
*/



// Note:    Returns local date&time in string formate. No need to add or substract GMT hours. 24 hours formate
// Output:  Tue Aug 12 2025 19:50:11 GMT+0600 (Bangladesh Standard Time)

// let now1 = Date()
// let now11 = Date().split(" ")

// switch(now11[0]){

//     case 'Sun':
//         now11[0] = 'Sunday'
//         break
//     case 'Mon':
//         now11[0] = 'Monday'
//         break
//     case 'Tue':
//         now11[0] = 'Tuesday'
//         break
//     case 'Wed':
//         now11[0] = 'Wednesday'
//         break
//     case 'Thu':
//         now11[0] = 'Thursday'
//         break
//     case 'Fri':
//         now11[0] = 'Friday'
//         break
//     case 'Sat':
//         now11[0] = 'Saturday'
//         break

// }

// let hour = parseInt(now11[4].split(":")[0])
// let ampm = (hour >= 12) ? 'PM' : 'AM';


// console.log(`Today is: ${now11[0]}`)
// console.log(`Date: ${now11[2]}th ${now11[1]}, ${now11[3]}`)
// console.log(`Time: ${now11[4]} ${ampm}`)
// console.log("Time Zone: ", now11[6].replace(/[(]/g, ""))

/*-------------------------------------------------------------*/


// Note:    Returns local date&time based on system's language and region. No need to add or substract GMT hours. 12 hours formate
// Output:  8/12/2025, 7:46:01 PM
const now2 = new Date().toLocaleString();
console.log( now2.split(",").map((item) => item.trim()) )






// const dateObjectTime = new Date();   // returns UTC date&time based on system's clock and timezone.
// console.log(dateObjectTime);         // 2025-08-12T13:58:34.275Z


// const utcTime = new Date().toUTCString();    // Returns UTC date&time.
// console.log(utcTime);                        // Tue, 12 Aug 2025 13:46:01 GMT


// console.log("Year:", now.getFullYear());                 // 2025
// console.log("Month:", now.getMonth() + 1);               // 8  (0-based, so +1)
// console.log("Date:", now.getDate());                     // 12
// console.log("Day:", now.getDay());                       // 2  (0=Sunday, 1=Monday, etc.)
// console.log("Hour:", now.getHours());                    // 19 (24-hour format)
// console.log("Minutes:", now.getMinutes());               // 45
// console.log("Seconds:", now.getSeconds());               // 12
// console.log("Milliseconds:", now.getMilliseconds());     // 123





// //-------- from object and using date-time methods

// let now = new Date()

// monthList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// console.log("Today is: ", monthList[now.getDay()])
// console.log(`Time: ${now.getHours()%12}:${now.getMinutes()}:${now.getSeconds()} ${(now.getHours() >= 12) ? 'PM' : 'AM'}`)
// console.log(`Date: ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`)
// console.log("Time Zone: N/A")

// console.log("--------------------------------------------------")

// //-------- from string using split methods