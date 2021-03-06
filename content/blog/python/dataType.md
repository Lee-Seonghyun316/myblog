---
title: 파이썬 자료
date: 2021-03-02 16:12:04
category: python
thumbnail: './image/'
draft: false
---

#데이터 타입

<br>

<h3>02-1 숫자형</h3>

<p>숫자형에서는 정수형, 실수형, 8진수, 16진수 등이 있다. <br> 
특히 파이썬에서 실수는 아래와 같이 나타내니 기억하도록 하자. </p>

```python
a = 4.24E10
a = 4.24e-10
```

E10은 10의 10승ㅇㄹ 나타내고 e-10은 10의 -10승을 나타낸다.

8진수와 16진수는 아래와 같이 표현한다.

`[8진수]`

```python
a = 0o177
```

`[16진수]`

```python
a = 0x8ff
```

<br/>
<h3>숫자형 활용 사칙연산</h3>

`[사칙연산]`

```python
a = 3
b = 4
a+b
7
```

참고로 제곱은 `**` 으로 나타내니 기억하기 바란다.
아래의 연산자들도 기억하면 유용하다.

나머지 계산 : %<br>
몫 계산 : //<br>
나눗셈 : /<br>

<hr>
<h2>02-2 문자열 자료형</h2>

문자열 표현 방법에는 아래와 같이 4가지가 있다.

```python
"hello world"
'hello world'
"""hello world"""
'''hello world'''
```

4가지나 문자열을 가지는 이유는 문자열 안에 '나 "의 부호를 표현하고 싶었기 때문이다.
참고로 백슬러시 `\`를 이용하여 표현할 수도 있으니 참고하기 바란다.

문자열이 여러줄일 경우에는 3개로 중첩된 '나 "를 사용하는 것이 좋다.

<hr>
<h3>문자열 연산 </h3>

1. 문자열 연결

```python
head = "hello"
tail = "world"
head + tail
#'hello world'
```

2. 문자열 곱하기

```python
a = "hello"
a * 2
#'hellohello'
```

3. 문자열 길이 구하기

```python
head = "hello"
len(head)
#5
```

다음 시간에는 문자열 인덱싱과 슬라이싱에 대해 알아보자.
