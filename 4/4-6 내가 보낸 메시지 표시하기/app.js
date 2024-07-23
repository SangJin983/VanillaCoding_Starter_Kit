/*
if (false) {
  console.log("Hello, world");
}
*/

const something = true;
const moreSomething = true;

if (something) {
  console.log("I am inside Something");

    if(moreSomething) {
      console.log("I am inside moreSomething");
    } else {
      console.log("I never gets called.");
    }
} else {
  console.log("I never gets called either.");
}

/*
const A = true;
const B = false;
const C = true;
const D = false;
const E = false;

if (A) {
  console.log("one..");
} else if (B) {
  console.log("two..");
} else if (C) {
  console.log("three..");
  // C도 참이지만 이미 A가 조건을 충족했기 때문에, 건너뛰어서 동작하지 않음
} else if (D) {
  console.log("four..");
} else if (E) {
  console.log("five..");
} else {
  console.log("I can't count")
}
*/