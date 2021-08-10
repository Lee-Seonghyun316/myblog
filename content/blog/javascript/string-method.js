// string method

// 5.1 기본적인 문자열 메서드
// - 자바스크립트에는 문자열에 사용할 수 있는 많은 메서드가 있다. 

// indexOf()
// 문자열에서 지정된 값이 처음 나타나는 위치를 반환한다. 

const str1 = "this is a short sentence";
console.log(str1.indexOf("short"));

// slice()
// 문자열의 지정된 부분을 새 문자열로 반환한다. 

const str2 = "pizza, oringe, cereals";
console.log(str2.slice(0,5));

// toUpperCase()
// 문자열 내의 모든 문자를 대문자로 바꾼다. 

const str3 = "i ate an apple";
console.log(str3.toUpperCase());

// toLowerCase()
// 문자열의 모든 문자를 소문자로 바꾼다. 

const str4 = "I ATE AN APPLE";
console.log(str4.toLowerCase());

// 5.2 ES6의 새로운 문자열 메서드

// startsWith()
// 이 메서드는 매개변수로 받은 값으로 문자열이 시작하는지 확인한다. 

const code = "ABCDEFG";

console.log(code.startsWith("ABC"));

console.log(code.startsWith("abc"));
// startsWith는 대소문자를 구분함.
console.log(code.startsWith("ABC"));
console.log(code.startsWith("DEF", 3));

