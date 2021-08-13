// 배열 메서드
//8.1 Array.from()
//배열스러운, 즉 배열처럼 보이지만 배열이 아닌 객체를 받아서 실제 배열로 변환해 반환한다.

//HTML
/*
<div class="fruits">
  <p> Apple </p>
  <p> Banana </p>
  <p> Orange </p>
</div>
*/

//JS

/*
const fruits = document.querySelectorAll('.fruits p')
//fruits 는 3개의 p 태그를 포함한 노드리스트(배열과 비슷한 구조)이다.
//이제 fruits를 배열로 변환하자.

const fruitArray = Array.from(fruits)

console.log(fruitArray)

//이제 배열로 취급하므로 map()을 사용할 수 있다.
const fruitNames = fruitArray.map(fruit => fruit.textContent)

console.log(fruitNames);
 */

//다음과 같이 단순화할 수도 있다.

const fruits = Array.from(document.querySelectorAll('.fruits p'))
const fruitNames = fruits.map(fruit => fruit.textContent)
console.log(fruitNames);

//이와 같이 fruits를 배열로 변환한다. 따라서 map 등 배열이 제공하는 모든 메서드를 사용할 수 있는 상태가 되었다.
//전체 태그가 아닌 p 태그의 textContent만 새로우 배열로 만들었다.

//또한 Array.from()의 두 번째 인수를 이용해서, 배열에 map 함수를 적용한 것과 동일한 기능을 하는 코드를 작성할 수도 있다.






