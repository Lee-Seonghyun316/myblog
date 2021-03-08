---
title: 파이썬 기초(Class)
date: 2021-03-08 16:12:04
category: python
thumbnail: './image/'
draft: false
---

## <참고>지역변수와 전역변수

**지역변수**는 특정 블록 안에서만 작동하고, **전역변수**는 그 파일 전체에서 작도한다는 파이점이 있습니다.

<hr>원하는 값이 도출되지 않았다면 변수사용에 오류가 있는지 확인해 볼 필요가 있습니다.

<br>

## Class(클레스)

정의를 살펴보면 알래와 같습니다.

<hr>**정의** : 반복되는 변수와 메서드(함수)를 미리 정해놓은 설계도

_<함수 이용 덧셈 과정>_

```python
retult = 0
def add(num):
    global result
    result += num
    retrun result

print(add(3))
print(add(4))
#출력 : 3
#출력 : 7
```

클레스는 언제 사용할까?

- 함수를 여러번 써야 할 때, 클레스를 사용합니다.
  <hr>

**<클레스 이용 덧셈 과정>**

```python
class Calculator:
    #주로 대문자로 클레스 첫 번쨰 스펠링을 지정
    def __init__(self):
        #__를 사용하면 처음 결과를 만들 떄 무조껀 수행
        self.result = 0

    def add(self, nuam):
        self.result += num
        return self.result

cal1 = Calculator()
cal2 = Calculator()

print(cal1.add(3))
print(cal1.add(4))
print(cal2.add(3))
print(cal2.add(7))
#출력 : 3
#출력 : 7
#출력 : 3
#출력 : 10
```

**<클레스 이용 예제>**

```python
class FourCal:
    def setdata(self, first, second):
        self.first = first
        self.second = second

a = FourCal()
a.setdata(1,2)
print(a.first)#출력 : 1
print(a.second)#출력 : 2
```

**<클레스 이용 예제2>**

```python
class FourCal:
    def __init__(self, first, second):
        self.first = first
        self.second = second
    def setdata(self, first, second):
        self.first = first
        self.second = second
    def add(self):
        result = self.first+self.second
        return result

a = FourCal(1,2)
a.setdata(4,2)
print(a.add)#출력 : 6
```

<br>

### 클레스의 상속

<hr>

상속은 계산기 클레스를, 공학용 계산기 클레스를 만들 때 활용하자는 아이디어로 생각하면 됩니다.

이때, 공학용 계산기는 **자식 클레스**가 되고 계산기는 **부모 클레스**가 됩니다.

```python
lass FourCal:
    def __init__(self, first, second):
        self.first = first
        self.second = second
    def setdata(self, first, second):
        self.first = first
        self.second = second
    def add(self):
        result = self.first+self.second
        return result
class MoreFourCal(FourCal):
   #pass
    def pow(self):
        result = self.first ** self.second
        return result

a = MoreFourCal(4,2)
#a.add() # 출력 : 6
print(a.pow())
```

참고로 클레서에서, 자식 클레스의 메소드와 부모 클레스의 메소드가 겹치면 자식의 메소드가 작동됩니다.

클레스 변수는 아래 코드 파일을 참고해서 봅시다.

```python
class Family:
        lastname = "김" #클레스 함수

Family.lastname = "박"
print(Family.lastname)

a = Family()
b = Family()
print(a.lastname)
print(b.lastname)

```

다음에는 파이썬의 *모듈*에 대해서 알아보도록 하겠습니다.
