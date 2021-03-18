---
title: 파이썬 코딩테스트(파이썬 복습3)
date: 2021-03-18 16:12:04
category: coding-test
thumbnail: './image/'
draft: false
---

**사전 자료형**

- 정의 : 사전자료형은 키와 값의 쌍을 데이터로 가지는 자료형입니다.
- 특징 : 변경 불가능한 자료형을 키로 사용할 수 있습니다. 파이썬의 사전 자료형은 해시 테이블을 이용해서 데이터처리를 **O(1)**안에 해결가능하다는 장점이 있습니다

```python
data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

print(data) #dic 객체 출력

if '사과' in data:
    print("사과를 키로 가지는 데이터 존재")

key_list = data.keys()
#키 값만 가지고 있는 리스트

value_list = list(data.values())
print(value_list)
#value값만 가지고 있는 리스트->리스트 형태로 변경
```

**집합 자료형**

- 특징 : 원소를 중복 허용하지 않으며 순서가 없습니다. 또한 집합은 데이터의 조회 및 수정에 있어서 **상수시간**안에 처리가 가능합니다.

```python
data = set([1, 1, 2, 3, 4, 4, 5])#중복된 요소 자동 제거
print(data)

#새로운 원소 추가
data.add(4)
print(data)

#한번에 여러 원소 추가
data.update([5, 6])

#특정한 값을 갖는 원소 삭제
data.remove(3)
print(data)
```

- 집합 자료형의 연산 : **합집합, 교집합, 차집합** 등을 지원합니다.

**사전 자료형과 집합 자료형의 특징**

- 순서가 없기 때문에 인덱싱으로 값을 얻을 수 없습니다.
- 사전자료형은 **키(key)**를 이용해서, 집합은 **원소**를 이용해서 특정 값을 조회해야 합니다.

<hr/>

## 기본 입출력

- 모든 프로그램은 약속된 입출력 양식을 가지고 있습니다.
- **input()**함수는 한줄의 **문자열**을 입력 받는 함수입니다.
- **map()**함수는 리스트의 모든 원소에 각각 특정한 함수를 적용할 때 사용합니다.

```python
#문자열에서 정수로 변경
n = int(input())

#데이터를 공백 기준 구분하여 입력
data = list(map(int, input().split90))

data.sort(reverse = True)
print(data)

#데이터의 개수가 3개로 정해져 있는 경우
a, b, c = list(map(int, input().split90))
print(a, b, c)
```

map과 input함수를 이용해 입력받는 부분은 손에 익을 정도로 연습해서 프로그래밍 문제 해결에 적절히 사용하는 것이 좋습니다.

**빠르게 입력 받기**

- 사용자로부터 입력을 최대한 빠르게 받아야 하는 경우에 사용합니다. (시간 초과 문제 해결)
- 파이썬의 경우 sys라이브러리에 정의되어 있는 **sys.stdin.readline()** 메서드를 사용합니다. (단, 입력 후 엔터가 줄 바꿈 기호로 입력되므로 **rstrip()** 메서드를 함께 사용합니다. ) -> 이진탐색, 정렬, 그래프탐색에 많이 이용됩니다.

```python

import sys

data = sys.stdin.readline().rstrip()
print(data)
```

**자주 사용되는 표준 출력 방법**

- 기본 출력은 **print()**함수를 이용합니다. (print는 기본적으로 출력이후로 엔터를 넣으므로 end를 이용해서 수정할 수 있습니다. )

```python
a = 1
b = 2
print(a, b)
print(7, end=" ")
print(8, end=" ")
```
