---
title: 파이썬 중급(프로그래밍 어떻게 할까?)
date: 2021-03-11 16:12:04
category: python
thumbnail: './image/'
draft: false
---

이번 글은 어떤 파이썬 기초에서 다룬 내용을 통해 어떤 프로그램을 만들 수 있는지 복습해 보겠습니다.

먼저 입력과 출력을 정해야 합니다.

<br/>
### 구구단 함수 만들기

- 함수 이름 : GuGu
- 입력 받는 값 : 2
- 출력 받는 값 : 2단
- 결과의 형태 : 리스트

```python
def GuGu(n):
    result = []
    i =  1
    while i < 10:
        result.append(n*i)
        i = i + 1
    return result

print(GuGu(2))
```

<br/>
### 3과 5의 배수 합하기

- 입력 : 1~999
- 출력 : 3의 배수와 5의 배수 총합
- 생각해 볼 것 : 3의 배수와 5의 배수는 어떻게 찾지?
  3의 배수와 5의 배수가 겹칠 떄는 어떻게 하지?

```python
result = 0
for n in range(1,1000):
    if n % 3 == 0 or n % 5 == 0:
        result += n
print(result)


# n= 1
# while n < 1000:
#     print(n)
#     n += n
```

<br/>
### 게시판 페이징하기

문제 설명 : 게시물의 총 건수와 한 페이지에 보여줄 게시물 수를 입력으로 주었을 떄 총 페이지수를 출력하는 프로그램

- 함수이름 : GetTotalPage
- 입력 : 게시물의 총 건수(m), 한 페이지에 보여 줄 게시물 수 (n)
- 출력 : 총 페이지 수

```python
def getTotalPage(m, n):
    if(m % n ==0):
        return m // n
    else
        return m // n + 1

print(getTotalPage(5,10))
print(getTotalPage(15,10))
print(getTotalPage(25,10))
print(getTotalPage(30,10))

# m = [5, 15, 25, 30]
# n = 10

# for i in range(1, len(m)):
#     print[m[i]]

```

## 간단한 메모장 만들기

- 필요한 기능 : 메모 추가하기, 메모 조회하기
- 입력 : 메모 내용, 프로그램 실행 옵션
- 출력 : memo.txt

```python
#memo,py 만들기
import sys

option = sys.argv[1]


print(option)
print(memo)

#쓰기 모드
if option == '-a':
    memo = sys.argv[2]
   f = open('memo.txt', 'a')
   f.write(memo)
   f.write('\n')
   f.close()
#$ python memo.py -a "asdf"
#출력 : -a
#      asdf

#읽기 모드
elif option == '-v':
   f = open('memo.txt')
   memo = f.read()
   f.close()
   print(memo)
```

다음 글에서도 새로운 함수들을 작성하며 프로그래밍 연습을 하도록 하겠습니다.
