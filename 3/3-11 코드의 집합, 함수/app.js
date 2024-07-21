// console.log(1)

// function greet() {
//   const myName = "ken";
//   console.log(`Hello ${myName}`);
// }

// console.log(2)

// greet(); // greet 함수 호출

// function getGreeting() {
//   const myName = "ken";
//   return `Hello ${myName}`; // "Hello ken" 반환
// }

// const result = getGreeting();
// console.log(result);

// function logGreeting() {
//   const myName = "ken";
//   console.log(`Hello ${myName}`);
// }

// const result = logGreeting();
// console.log(result); // 반환값 지정이 안되있기 때문에 undefined로 출력됨.

// function getGreeting(name) {
//   return `Hello ${name}`;
// }
// const result = getGreeting("ken");
// console.log(result);

// function getGreeting(name) {
//   return `Hello ${name}`;
// }

// const greetingToKen = getGreeting("ken");
// const greetingToWan = getGreeting("wan");

// console.log(greetingToKen);
// console.log(greetingToWan);

// function add(a, b) {
//   return a + b;
// }

// const sum = add(3, 5); // a: 3, b: 5
// console.log(sum);

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const result = multiply(2, 4, 3); // a: 2, b: 4, c:3
// console.log(result);

// 6. 함수의 종료

function eatDinner(menu) {
  if (menu === "burger") {
    console.log("조건문 내부");
    return "good";
  }

  console.log("조건문 아랫 부분");
  return "no good";
}

const feeling = eatDinner("burger");
console.log(feeling);
