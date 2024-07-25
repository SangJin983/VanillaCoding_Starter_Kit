/*

const list = [1, 2, 3];
const result = list.length + 1;

console.log(result) // 4

const result = [1, 2, 3];
result.push(4);

console.log(result); // [1, 2, 3, 4]

const result = [1, 2, 3];
result.unshift(0);

console.log(result); // [0, 1, 2, 3]

const result = [1, 2, 3];
result.pop();

console.log(result) // [1,2]

const result = [1, 2, 3];
result.shift();

console.log(result) // [2, 3]

const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
const result = arr.indexOf(2);

console.log(result); // 1

const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
const result = arr.includes(2, 2); // true. 2가 있는지 검색하되, 2번째 부터.

console.log(result);

const arr = ["010", 1234, 5678];
const result = arr.join("-")

console.log(result); // 010-1234-5678

const arr = ["셋", "둘", "하나"];
const result = arr.reverse();

console.log(result); // ["하나", "둘", "셋"]

const arr = [1, 4, 5, 8, 9, 12, 15];
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    result.push(arr[i]);
  }
}

console.log(result); // 1, 5, 9, 15

const arr = [1, 4, 5, 8, 9, 12, 15];
const result = [];

for (let i = arr.length - 1; i >= 0; i--) {
  if (i % 2 === 0) {
    result.push(arr[i]);
  }
}

console.log(result); // 15, 9, 5, 1

const person = {
  name: "leo",
  job: "operations manager",
};

person.years = 3;
person.job = "pm";

const result = person.job;

console.log(result); // pm

const employee = {
  name: "dm",
  job: "software enginner",
  years: 1,
};

delete employee.years;
const result = employee.years;

console.log(result);
// undefined. 속성 자체를 제거하기 때문에, 해당 속성이 정의되지 않았다.

const obj = {
  name: "Vanilla Coding",
  url: "https://www.vanillacoding.co/",
  contact: {
    email: "info@vanillacoding.co",
    phone: "02-6713-7279",
  },
};

const result = obj.contact.email;
console.log(result); // "info@vanillacoding.co"

const countries = ["South Korea", "Japan", "United Stated"];

const reservation = {
  name: "ken",
  checkInDate: "2024-01-15",
  checkOutDate: "2024-01-16",
  vistingCountries: countries,
  currentLocation: {
    country: "South Korea",
    city: "Seoul",
  },
}

const result = reservation.vistingCountries[2];

console.log(result); // United Stated

const reservation = {
  name: "ken",
  checkInDate: "2024-01-15",
  checkOutDate: "2024-01-16",
  location: {
    country: "South Korea",
    city: "Seoul",
  },
};

const key = "country";
delete reservation.location[key];

const result = reservation.location.country; // undefined
console.log(result)

function foo() {
  return NaN || 7;
}

const result = foo();

console.log(result); // 7

function add(x, y) {
  return x + y;
}

const result = add(1, 5);
console.log(result); // 6

*/

function echo(word, times) {
  return word.repeat(times);
}

const result = echo("수박", 3);

console.log(result); // 수박수박수박
