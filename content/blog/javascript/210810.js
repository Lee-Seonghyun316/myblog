// 4.1 문자열 삽입 ES6에서는 백틱을 사용하여 코드 작성가능

let myname = "Erica";
const greeting = `Hello my name is ${myname}`;

console.log(`Hello ${myname}`);

// 4.3 여러 줄 문자열 생성

const content = `hello,
my name is Erica
how are you?`;

console.log(content);

// 4.4 중첩 템플릿 템플릿 안에 템플릿을 중첩하는 것

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

// 삼항 연산자 추가하기 삼항연산자를 사용하면 템플릿 문자열 내에 로직을 쉽게 추가할 수 있다.

const isDiscounted = false;

function getPrice() {
    console.log(
        isDiscounted
            ? "$10"
            : "$20"
    );
}

getPrice();

// 응용 const artist = {     name: "Bonc Jovi",     age: 56, };

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

console.log(text);

// 4.6 템플릿 리터럴에 함수 전달하기 다음 예제 코드처럼, 필요하면 템플릿 리터럴 내에 함수를 전달 수 있다.

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

// 4.7 태그된 템플릿 리터럴
// 함수를 태그하여 템플릿 리터럴을 실행하면 템플릿 내부에 있는 모든 항복이 태그된 함수의 인수로 제공된다.

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