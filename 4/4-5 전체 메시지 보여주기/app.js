/*

for (let i = 5; i < 10; i++) {
  console.log(`${i}) 물 한컵 떠와.`);
}

for (let i = 5; i <= 10; i++) {
  console.log(`${i}) 물 한컵 떠와.`);
}

for (let i = 5; i === 10; i++) {
  console.log(`${i}) 물 한컵 떠와.`);
}

for (let i = 5; i <= 10; i = i + 5) {
  console.log(`${i}) 물 한컵 떠와.`);
}

const str = "hello world";

for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}번째 글자는 "${str[i]}"입니다.`);
}

const str = "hello";

for (let i = 0; i < str.length; i++) {
  console.log(`${i + 1}번째 글자는 "${str[i]}"입니다.`);
}

*/

// const str = "살삼치삼살삼"
// const result = str[0] + str[2] + str[4];

const str = "살삼치삼살삼";
let result = str[0];

for (let i = 2; i <= 4; i += 2) {
  result = result + str[i];
}

console.log(result);