---
title: 템플릿 리터럴
date: 2021-08-10 16:12:04
category: javascript
thumbnail: './image/'
draft: false
---


1. ### 문자열 삽입

- ES6부터 백틱을 사용하여 코드 작성이 가능하다. 

`string-insert.js`

```js
let myname = "Erica";
const greeting = `Hello my name is ${myname}`;

console.log(`Hello ${myname}`);
```



2. ### 여러줄의 문자열 생성

`strings.js`

```js
const content = `hello,
my name is Erica
how are you?`;

console.log(content);
```



3. ### 중첩 템플릿 : 템플릿 안에 템플릿을 중첩하는 것

`nested-template.js`

```js
const people = [
    {
        name: 'Erica',
        age: 22
    }, {
        name: 'Tom',
        age: 17
    }
];

const markup = `
<ul>
    ${people.map(person => `<li> ${person.name} </li>`)}
</ul>
`;
console.log(markup);
```



4. ### 삼항연산자 사용

- 삼항연산자를 사용하면 템플릿 문자열 내에 로직을 쉽게 추가할 수 있다. 

`ternary-operator.js`

```js
const isDiscounted = false;

function getPrice() {
    console.log(
        isDiscounted
            ? "$10"
            : "$20"
    );
}

getPrice();
```



`ternary-operator2.js`

```js
// const artist = {
//     name: "Bonc Jovi",
//     age: 56
// };

const artist = {
    name: "Trent Reanor",
    age: 53,
    song: 'Hurt'
}

const text = `
<div>
    <p>${artist.name} is ${artist.age} years old ${artist.song
    ? `and wrode the
        song ${artist.song}`
    : ''}</p>
</div>
`;
```



5. ### 템플릿 리터럴에 함수 전달하기

- 다음 예제 코드처럼 필요하면 템플릿 리터럴 내에 함수를 전달할 수 있다. 

`function.js`

```js
const groceries = {
    meat: "pork chop",
    veggie: "salad",
    fruit: "apple",
    others: ['mushromms', 'instant noodles', 'instant soup']
};

function groceryList(others) {
    return `
    <p>
        ${others.map(
        other => `<span>${other}</span>`).join('\n')}
    </p>
    `
}

const markupGrocery = `
<div>
<p>${groceries.meat}</p>
<p>${groceries.veggie}</p>
<p>${groceries.fruit}</p>
<p>${groceryList(
    groceries.others
)}</p>
</div>
`;

console.log(markupGrocery);
```



6. ### 태그된 템플릿 리터널

`template-literal-tag.js`

```js
let person1 = "Erice";
let age1 = 22;

function myTag(strings, personName, personAge){
    let str = strings[1];
    let ageStr;

    personAge > 50 ? ageStr = "grandpa" : ageStr = "yougster";

    return personName +str + ageStr;
}

let sentence  = myTag`That ${person1} is a ${age1}!`;
console.log(sentence);
```

