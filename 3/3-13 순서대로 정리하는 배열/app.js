const fruits = ["apple", "orange", "grape"];
const people = ["ken", "wan", "kim", "hwang"];
const animals = ["cat", "dog"];

fruits[0] = "kiwi";

// function getNumOfElements(list) {
//   console.log(`배열에는 ${list.length}개의 요소가 있습니다.`);
// };

// getNumOfElements(fruits);
// getNumOfElements(people);
// getNumOfElements(animals);

// console.log(`${fruits[0]}은 사과입니다.`);
// console.log(`${fruits[1]}은 오렌지입니다.`);
// console.log(`${fruits[2]}은 포도입니다.`);

// console.log(`
//   ${fruits[0]}은 사과이고,
//   ${fruits[0].length}글자로 이루어져 있습니다.
// `);
// console.log(`
//   ${fruits[1]}은 오렌지이고,
//   ${fruits[1].length}글자로 이루어져 있습니다.
// `);
// console.log(`
//   ${fruits[2]}은 포도이고,
//   ${fruits[2].length}글자로 이루어져 있습니다.
// `);

console.log(fruits);

// // 1. 변수 이름과 배열을 별도로 전달하는 방법
// function getNumOfElements(arrayName, list) {
//   console.log(`${arrayName}에는 ${list.length}개의 요소가 있습니다.`);
// };

// getNumOfElements("fruits", fruits);

// // 2. 변수와 변수 이름을 함께 매핑하는 객체 만들기
// const fruitsList = ["apple", "orange", "grape"];
// const peopleList = ["ken", "wan", "kim", "hwang"];
// const animalsList = ["cat", "dog"];

// const category = {
//   fruits: fruitsList,
//   people: peopleList,
//   animals: animalsList,
// };

// function getNumOfElements(categoryName) {
//   const list = category[categoryName];
//   console.log(`${categoryName}에는 ${list.length}개의 요소가 있습니다.`);
// }

// getNumOfElements("people");

// // 2-1. 축약문법 적용
// const category = {
//   fruits,
//   people,
//   animals //속성 이름과 변수 이름이 같을 때, 생략가능하다.
// };

// function getNumOfElements(categoryName) {
//   const list = category[categoryName];
//   console.log(`${categoryName}에는 ${list.length}개의 요소가 있습니다.`);
// }

// getNumOfElements("fruits");
// getNumOfElements("people");
// getNumOfElements("animals");