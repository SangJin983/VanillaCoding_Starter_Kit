/*
const key = "address";

const person = {
  name: "Ken Huh",
  age: 40,
  [key]: "서울 특별시 강남구 테헤란로 255",
  "personal-color": "green"
};

console.log(person);
console.log("반갑습니다.")
*/

/*
function getKey() {
  return "address";
}

const person = {
  name: "Ken Huh",
  age: 40,
  [getKey()]: "서울특별시 강남구 테헤란로 255",
  "personal-color": "green",
};

console.log(person);
*/

const person = {
  name: "Ken Huh",
  age: 40,
  address: "서울특별시 강남구 테헤란로 255",
  "personal-color": "green",
};

/*
const myName = person.name;

console.log(myName);
console.log(person.name);
*/

/*
const color = person["personal-color"];

console.log(color);
console.log(person["personal-color"]);

const key = "age";
console.log(person[key]);
*/

/*
person.brother = "wan";

console.log(person.brother);

person["sister-in-law"] = "mariola";

console.log(person["sister-in-law"]);
*/

person.age = 45;

console.log(person.age);

/*
const person = {
  name: "Ken Huh",
  age: 13,
}

console.log(person.age);

delete person.age;

console.log(person.age);
console.log(person.address);
*/
