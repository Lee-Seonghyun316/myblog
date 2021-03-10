---
title: 파이썬 기초(내장함수, 외장함수)
date: 2021-03-10 16:12:04
category: python
thumbnail: './image/'
draft: false
---

내장함수 : 이미 파이썬에서 기본적으로 포함하고 있는 함수
ex: print() 등

```python
#내장함수 예시

abs(3) #절대값

all([1,2,3])# 모두 참인지 검사 0이 있으면 거짓

chr(97) #출력 : 'a' ( 아스키 코드 대응해서 출력)

print(dir([1,2,3])) # 리스트 명령어 모음 확인

#enumerate : 사전처럼 행렬값 출력
#eval

#filter
def positive(x):
    return x>0

a = list(filter(positive, [1, -3, 2, 0, -5, 6]))
print(a)
#출력 : [1, 2, 6]
#ture인 값만 골라서 출력했다.

#id
#int
#len
#list
#map
#max
#min
#open
#pow
#range
#round
#type
#zip : 자료형끼리 묶어주는 역할
```

## 외장함수

라이브러리 함수 :
`import`해서 사용한는 함수, 문서를 구글에서 찾아서 참고하여 사용하면 된다.

```python
#argv_test.py
import sys
print(sys.argv)
```

- pickle

- time : 날짜가 필요할 때 사용

- random : 난수 생성할 때

- webbrowser : 웹 브라우저를 열 수 있는 외부 모듈
