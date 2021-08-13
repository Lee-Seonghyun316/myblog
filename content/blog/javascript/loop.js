// 7.1 for of 루프

//배열에 대한 반복

const fruits = ['apple', 'banana', 'orange']
for (const fruit of fruits) {
  console.log(fruit)
}

//객체에 대한 반복
//객체의 기/값 쌍에 대한 반복은 어떻게 구현할 수 있을까?
//먼저 Object.keys(를 사용하여 객체의 모든 키를 가져온 후, 키에 대한 반복을 수행하면서 값에 접근하는 것이 가능하다.

const car = {
  maker: 'BMW',
  color: 'red',
  year: '2010',
}

for (const prop of Object.keys(car)) {
  const value = car[prop]
  console.log(prop, value)
}

//7.3 for of와 for in의 차이

let list = [4, 5, 6]

//for ...in은 키의 목록을 반환한다.

for (let i in list) {
  console.log(i)
}
//for ...of는 값을 반환한다.

for (let i of list) {
  console.log(i)
}

