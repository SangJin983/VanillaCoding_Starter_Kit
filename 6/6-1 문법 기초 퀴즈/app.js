/*
const result = 30 && 0;
console.log(result); // 0

const a = 0;
const result = !!a;
console.log(result); // false

const result = ("0" && 30) || false;
console.log(result); // 30

const result = 10 % 3;
console.log(result); // 1

let a = 10 % 3; // 1
a += 3; // 4
const result = a++; // 4 -> 5

console.log(result) // 4

let a = 10 % 3; // 1
a -= 1; // 0
const result = ++a; // 1

console.log(result) // 1

const today = "토요일";
const result = "나는" + today + "에 일한다!";

console.log(result); // 나는토요일에 일한다!

const today = "토요일";
const result = `나는 ${today}에 일한다!`;

console.log(result); // 나는 토요일에 일한다!

const str = "something";
const result = `${str[0]}${str[3]}${str[1]}`; // seo

console.log(result);

const str = "HunGry";
const result = str.toLowerCase();

console.log(result); // hungry?

const str = "ha";
const a = str.repeat(5); // hahahahaha
const result = a.slice(4,6); // ha

console.log(result);

const a = "ha".repeat(3); // hahaha
const result = a.split("a"); // "h", "h", "h"

console.log(result); // ["h", "h", "h", ""]

const result = 7 + "3";
console.log(result); 
// 73 이 나오는데, 7을 자바스크립트에서 강제로 문자열로 맞추어 처리한 것이다.

const result = "7" + 3;
console.log(result); // 73

*/

const result = "7" - 3;
console.log(result);
// 답은 4. 이 경우에는 타입 강제 변환이 숫자로 처리된다. (-, *, /)
