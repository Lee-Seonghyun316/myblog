---
title: 문법(반복문)
date: 2021-03-22 16:12:04
category: coding-test
thumbnail: './image/'
draft: false
---

**반복문**

- 특정한 소스코드를 반복적으로 실행하고자 할 때 사용하는 문법입니다.
- `for`문과 `while`문이 있으며 코딩 테스트에서는 for문이 더 간결한 경우가 많습니다.

**while**

- 1부터 9까지 모든 정수의 합 구하기 예제(while)

`practice.py`

```python
i = 1
result = 0

while i<= 9:
    result += i
    i+= 1

pinrt(result)#45
```

- 반복문에서의 **무한 루프**
  무한 루프는 끊임없이 반복되는 반복 구문으로, 코딩 테스트에서는 거의 구현하지 않습니다. 반복문 작성 후에는 항상 탈출할 수 있는지 확인해야 합니다.

**for**

`practice.py`

```python
array = [9,8,7,6,5]
for x in array:
    print(x)
```

**range()**

- for문에서 연속적인 값을 차례대로 순회할 때는 range()를 주로 사용합니다.
- `range(시작, 끝 값 +1)`의 형태로 사용합니다.
- 인자를 하나만 넣으면 자동으로 시작값이 0이 됩니다.

- 1부터 9까지 모든 정수의 합 구하기 예제 (for)

`practice.py`

```python
result = 0

for i in range(1, 10):
    result += i
pinnt(result)#45
```

<hr/

>

## 반복문에서 많이 사용하는 키워드

**continue**

- 반복문에서 남은 코드의 실행을 건너뛰고 다음 반복 진행 시 사용합니다.

- 1부터 9까지의 홀수 합 구하는 예제 (for)

`practice.py`

```python
result = 0
for i in range(1, 10):
    if i % 2 == 0:
        continue
    result += i

print(result)#25
```

**break**

- 반복문을 즉시 탈출하고 싶을 때 사용합니다.

- 1부터 5까지의 정수를 차례대로 출력하는 예제 (while)

`practice.py`

```python
i = 1
while True:
    print("현재 i의 값:", i)
    inf i == 5:
        break
    i += 1
```

<hr/>

## 반복문 연습 예제

**학생들의 합격 여부 판단 예제**

- 점수가 80점만 넘으면 합격하는 예제 입니다.

`practice.py`

```python
score = [90, 80]

for i in range(2):
    if scroe[i] >= 80:
        print(i+1, "번 학생은 합격입니다. ")
```

다음 시간에도 여러 예제 들을 풀어보며 반복문을 익히도록 하겠습니다.
