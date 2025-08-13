
let StringFormateTime = Date();  // Returns local date&time in string formate.
console.log(StringFormateTime);  // Tue Aug 12 2025 19:50:11 GMT+0600 (Bangladesh Standard Time)


const LocalTime = new Date().toLocaleString();   // Returns local date&time based on system's language and region.
console.log(LocalTime);                          // 8/12/2025, 7:46:01 PM


const dateObjectTime = new Date();   // returns UTC date&time based on system's clock and timezone.
console.log(dateObjectTime);         // 2025-08-12T13:58:34.275Z


const utcTime = new Date().toUTCString();    // Returns UTC date&time.
console.log(utcTime);                        // Tue, 12 Aug 2025 13:46:01 GMT


console.log("Year:", now.getFullYear());                 // 2025
console.log("Month:", now.getMonth() + 1);               // 8  (0-based, so +1)
console.log("Date:", now.getDate());                     // 12
console.log("Day:", now.getDay());                       // 2  (0=Sunday, 1=Monday, etc.)
console.log("Hour:", now.getHours());                    // 19 (24-hour format)
console.log("Minutes:", now.getMinutes());               // 45
console.log("Seconds:", now.getSeconds());               // 12
console.log("Milliseconds:", now.getMilliseconds());     // 123





//-------- from object and using date-time methods

let now = new Date()

monthList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log("Today is: ", monthList[now.getDay()])
console.log(`Time: ${now.getHours()%12}:${now.getMinutes()}:${now.getSeconds()} ${(now.getHours() >= 12) ? 'PM' : 'AM'}`)
console.log(`Date: ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`)
console.log("Time Zone: N/A")

console.log("--------------------------------------------------")

//-------- from string using split methods

let now2 = Date().split(" ")

console.log(`Today is: ${now2[0]}`)
console.log(`Time: ${now2[4]}`)
console.log(`Date: ${now2[2]}th ${now2[1]}, ${now2[3]}`)
console.log("Time Zone: ", now2[6].replace(/[()]/g, ""))