---
title: 조건문 활용
date: 2020-12-27 16:12:04
category: javascript
thumbnail: './image/'
draft: false
---

#조건문 활용

<br>
문법을 익혔으면 조건문을 유용하게 활용하는 방법에 대해서 공부해 봅시다. 
다양한 상황을 가정하고 가장 적합한 해결법에 대해 고민하는 시간을 가져 보도록 하겠습니다. 
<br>
<hr>

### input이 사전에 주어진 값들 중 하나인지 확인하고 싶을 때  
<br>
첫번째는 input이 사전에 주어진 값들 중 하나인지 확인해야 하는 상황을 가정하겠습니다. 
기본적으로 논리연산자를 사용하여 아래와 같이 코드를 작성할 수 있습니다. 
<br>
<br>

`conditional-statement.js`
```js
//조건에 따라 다른 값 return
function favoriteFood(text) {
    return (
        text === '딸기' || text === '사탕' || text === '바닐라아이스크림' || text === '더치커'
    );
}

console.log(favoriteFood('딸기'));//true
console.log(favoriteFood('순대'));//false
```
<br>
이 코드의 단점은 비교해야 할 값이 많아지면 코드가 길어진다는 것입니다. 

조금 더 간결한 코드를 작성하기 위해 배열의 `includes`함수를 사용해 보도록 하겠습니다. 

<br>

`conditional-statement.js`
```js
//use array.includes

function favoritePerson(name){
    const nickname = ['양', '곰', '구름', '토끼'];
    return nickname.includes(name);
}

console.log(favoritePerson('양'));//ture
console.log(favoritePerson('하늘'));//false

```

<br>
이때, 화살표 함수를 이용한다면 아래와 같이 작성할 수 있습니다. 
코드가 간결하다고 항상 좋은 것은 아니지만 짧으면서도 읽었을 때 어떤 역할을 하는지 한눈에 아는 것이 중요합니다. 
<br>
<br>


`conditional-statement.js`
```js
//use =>
const favoriteAlcohol = what => ['진로', '매화수'].includes(what);

console.log(favoritePerson('진로'));//ture
console.log(favoritePerson('참이'));//false


```
<hr>

### input에 따라 다른 결과물을 반환하고 싶을 때  
<br>
주어진 값에 따라 다른값을 반환하고 싶을 때 사용할 수 있는 조건문에 대해 생각해 보도록 하겠습니다. 
예를 들어서 사고 싶은 물건이 input으로 들어오면 가격에 대해서 알려주는 함수는 어떻게 구현할까요?
`if문`을 사용하면 아래와 같습니다. 
<br>
<br>

`conditional-statement.js`
```js
//값에 따라 다른 결과물 반환
function getPrice(product){
    let price = 0;
    if(product === 'macbookPro') return 3000000;
    if(product === 'iphoneXR') return 1000000;
    if(product === 'lemonCandy') return 1000;
    return '...아직 안팔아요';
}
console.log(getPrice('macbookPro'));//3000000
console.log(getPrice('cookie'));//...아직 안팔아요


```

<br>
switch문을 사용해서 아래와 같이 작성할 수도 있습니다. 
<br>
<br>

`conditional-statement.js`
```js
//use switch : return 시 break 생략

function getPriceSwitch(product){
    switch (product){
        case 'macbookPro':
            return 3000000;
        case  'iphoneXR':
            return 1000000;
        case 'lemonCandy':
            return 1000;
        default:
            return '...품절';
    }
}

console.log(getPriceSwitch('사과'));//...품절
console.log(getPriceSwitch('lemonCandy'));//1000

```

<br>
객체를 사용하면 더 가독성있고 간결하게 작성할 수 있습니다. 
<br>
<br>

`conditional-statement.js`
```js
//use object
function  getPriceObject(product){
    const price = {
        'macbookPro': 3000000,
        'iphoneXR' : 1000000,
        'lemonCandy': 1000
    };
    return price[product] || '...품절입니다';
}

console.log(getPriceObject('바나나'));//...품절입니다
console.log(getPriceObject('iphoneXR'));//1000000


```

<br>
만약 input에 따라 실행하야 하는 구문이 다르다면 객체안에 함수를 넣어서 해결할 수도 있습니다. 
<br>
<br>

`conditional-statement.js`
```js
//use object(function)

function cookieObject(cookie) {
    const tasks = {
        chocolateCookie() {
            console.log('chocolateCookie판매 : 2000');
        },
        vanillaCookie() {
            console.log('vanillaCookie판매 : 2000');
        }
    };
    if (!tasks[cookie]) {
        console.log('...?');
        return;
    }
    tasks[cookie]();
}
cookieObject('chocolateCookie');//chocolateCookie판매 : 2000



```
