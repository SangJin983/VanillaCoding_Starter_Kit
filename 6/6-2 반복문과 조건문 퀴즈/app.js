/*

let result = 0;

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    result++;
  }
}

console.log(result); // 3

let result = 0;

for (let i = 0; i < 10; i += 2) {
  if (i % 4 === 0) {
    result += 1;
  }
}

console.log(result); // 3

*/

let result = 0;

for (let i = 0; i < 10; i++) {
  if(i % 3 === 0 || i % 4 === 0) {
    result += i;
  }
}

console.log(result); // 0+3+4+6+8+9 = 30

