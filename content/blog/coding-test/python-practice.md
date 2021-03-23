---
title: 파이썬 기초 예제
date: 2021-03-23 16:12:04
category: coding-test
thumbnail: './image/'
draft: false
---

1. **학생들의 합격 여부 판단 예제**

조건 : 커닝한 2, 4번 학생은 제외한다.

```python
scores = [90, 85 77, 65, 97]
cheating_stuednt_list={2, 4}

for i in range(5):
    if i + 1 in cheating_stuedent_list:
        continue
    if scores[i] >= 80:
        print(i + 1, " 번 학생은 합격")

#1  번 학생은 합격
#5  번 학생은 합격
```

2. **중첩된 반복문: 구구단 예제**

```python
for i in range (2, 10):
    for j in range(1, 10):
        print(i, "X", j, "=", i*j)
    print()
# 2 X 1 = 2
# 2 X 2 = 4
# 2 X 3 = 6
# 2 X 4 = 8
# 2 X 5 = 10
# 2 X 6 = 12
# 2 X 7 = 14
# 2 X 8 = 16
# 2 X 9 = 18

# 3 X 1 = 3
# 3 X 2 = 6
# 중략
```

<hr/>

## 함수

- 함수란 특정한 작업을 하나의 단위로 묶어 놓은 것을 의미합니다.
- 함수를 사용하면 불필요한 소스코드의 반복을 줄일 수 있습니다.

**함수의 종류**

- 내장 함수 : 파이썬 기본 제공 함수
- 사용자 정의 함수 : 개발자 정의 함수

**함수 정의하기**

- 매개변수 : 한수 내부에서 사용할 변수
- 반환 값 : 함수에서 처리 된 결과를 반환

1. **더하기 함수**

```python
def add(a, b):
    return 1+b
print(add(3, 7))#10
```

**파라미터 지정하기**

- 이 경우 매개변수의 순서가 달라도 상관이 없습니다.

```python
def add(a, b):
    return 1+b
print(b=3, a=7)#10
```

**global 키워드**

- `global`키워드로 변수를 지정하면 해당 함수에서는 지역 변수를 만들지 않고 함수 바깥에 선언된 변수를 바로 참조하게 됩니다.

```python
a= 0

def fun():
    global a
    a += 1

for i in range(10):
    fun()

print(a)#10
```

**여러 개의 반환 값**

- 파이썬에서 함수는 여러 개의 반환 값을 가질 수 있습니다.

```python
def operator(a, b):
    add_var = a + b
    subtract_var = a-b
    return add_var, subtract_var

a, b = operator(7, 3)
print(a, b)
```

**람다 표현식**

- 특정한 기능을 수행하는 함수를 한 줄에 작성할 수 있다는 점이 특징입니다.

```python
def add(a, b):
    return a + b

prit(add(3, 7))#10
#람다 표현식
print((lambda a, b: a+b)(3, 7))#10
```

1. **람다 표현식 예제**

- 내장 함수에서 자주 사용된다

`예제1`

```python
array = [('홍길동', 50), ('이순신', 32)]

def my_key(x):
    return x[1]

print(sorted(array, key = my key))
print(sorted(array, key = lambda x:x[1]))
# ('이순신', 32), ('홍길동', 50)]
# [('이순신', 32), ('홍길동', 50)]
```

`예제2`

```python
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]

result = map(lambda a, b: a+b, list1, list2)

print(list(result))
#[7, 9, 11, 13, 15]
```
