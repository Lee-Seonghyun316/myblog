// 디스트럭처링 할당 문법은 배열의 값 또는 객체의 속성을 풀어서 별개의 변수로 쓸 수 있게 해주는 자바스크립트 표현식이다.

//6.1 객체 디스트럭처링

const person = {
  first: 'Alberto',
  last: 'Montalesi',
}

const { first, last } = person

//디스트럭처링을 이용해여 person이 가진 속성에 접근함과 동시에 해당 속성 이름으로 변수 선언이 가능함을 알 수 있다.
//중첩된 객체 형태로 데이터가 주어진 경우에도 동일한 방법을 적용 할 수 있다.

const person2 = {
  name: 'Alberto',
  last: 'Montalesi',
  links: {
    social: {
      facebook: 'https://...',
    },
    website: 'https://albert...',
  },
}

const { facebook } = person2.links.social

console.log(facebook)

//변수의 이름을 객체의 속성과 동일하게 지정하는 데 그치지 않고, 다음과 같이 변수 이름을 바꿀 수도 있다.

// const { website: ws } = person2.links
// console.log(ws)
// console.log(website);
//변수명이 website 가 아니기 때문에 오류 발생

//다음과 같이 기본값을 전달할 수도 있다.
const { website: ws = 'https://' } = person2.links
console.log(ws)

//6.2 배열 디스트럭처링
//배열을 디스트럭처링할 때는 객체의 디스트럭처링과는 달리 {}가 아닌 []를 사용한다.

const person3 = ['Lee', 'SeongHyun', 22]
const [name, surname, age] = person3

console.log(name)

//생성하려는 변수의 수가 배열의 원소보다 적다면 다음과 같이 작성한다.
const [name2, surname2] = person3
//이때, 22는 어떤 변수에도 할당되지 않는다.

//나머지 모든 값을 얻고 싶다면 레스트 연산자를 사용하면 된다,

const person4 = ['Alberto', 'Montalesi', 'pizza', 'ice cream', 'cheese cake']
const [name3, surname3, ...food] = person4
console.log(food)

// 6.3 디스트럭처링을 이용하여 변수 교체하기

// 디스트럭처링 할당을 이용하면 변수의 값을 매우 쉽게 서로 교체할 수 있다.

let hungry = 'yes'
let full = 'no'

;[hungry, full] = [full, hungry]
console.log(hungry, full)
