/*
console.log(!true);
console.log(!false);

console.log(!2);
console.log(!0);
console.log(!NaN);
console.log(!"");
console.log(!" ");
console.log(!"hello");
console.log(!null);
console.log(!undefined);

const a = 0;
console.log(Boolean(0));

const b = 10;
console.log(Boolean(10));

*/


/*

Falsy 목록

0 - 0;
false;
null;
("");
""``;
NaN;

*/

/*

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || 0 || true);
console.log(false || " " || 10);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log("" && false && null);
console.log("null" && undefined && 10);

*/

console.log(true || 0 && "hello"); // `0 && "hello"`가 먼저 처리됨
