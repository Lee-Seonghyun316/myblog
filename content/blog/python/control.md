# 제어문

<hr>

## 조건문과 반복문

<br>

### 조건문

_예시_ : 돈이 있으면 택시를 타고 아니면 걸어 가라

_분석_ : 돈이 있을 때, 택시를 타다. 이것이 아니면, 걸어 가다

_파이썬 코드_ :

```python
money = False
if money:
    print("택시를 타고 가라")
else:
    print("걸어가라")
    #돈이 없음으로 걸어 가라고 나온다.
```

주의 할 점 : *들여쓰기*가 잘못되어 있으면 오류가 난다.

_응용_ : 참 거짓 확인

```python
money = 3000
now = 4000
if money < now:
    print("택시를 타고 가라")
else:
    print("걸어가라")
```

not
|
&
<=

> # =

- a in [] : []안에 a가 있는가?
- a not in [] : []안에 a가 없는가?
- pass : 통과

_응용_ : 조건이 더 많을 때

```python
money = 3000
now = 1000
card = 1
if money < now:
    print("택시를 타고 가라")
elif card:
    print("택시를 타고 가라")
else:
    print("걸어가라")

```

<hr>

### 반복문

반복되는 내용은 반복문을 이용해서 처리해줍니다.

#### while

```python
treeHit = 0
while treeHit < 10:
    treeHit = treeHit + 1
    print("나무를 %d번 찍었습니다. " % treeHit)
    if treeHit == 10:
        print("나무 넘어갑니다. ")

```

while 옆의 조건이 참이라면 이 반복문은 계속해서 돌아갑니다.

_break문_ : 반복문을 빠져나가게 해줍니다.

_응용_ : break 사용하기

_continue_ : 밑의 코드 읽지 않고 다음 반복으로 넘어갑니다.

_응용_ : continue 사용하기

#### for
