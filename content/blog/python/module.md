---
title: 파이썬 기초(모듈,패키지,예외처리)
date: 2021-03-09 16:12:04
category: python
thumbnail: './image/'
draft: false
---

모듈을 이용하면 아래와 같이 다른 파일에서 만든 함수를 **import** 를 통해 사용할 수 있습니다.

`mod1.py`

```python
#mod1.py
def add(a,b)
    return a + b
```

`index.py`

```python
import mod1
print(mod1.add(1,2))
```

모듈과 패키지가 조금 다르지만 거의 같은 개녀이라고 생각할 수도 있습니다.
<br/>
또한 다른 파일의 여러 함수중에서 특정 함수만 가져오고 싶다면 아래와 같이 사용할 수도 있습니다.

`index2.py`

```python
from mod1 import add
```

<hr/>

모듈 사용 시 기존 파일에 있던 특정 내용을 불러오고 싶지 않다면 아래와 같은 명령어를 사용할 수 있다.

`mod2.py`

```python
def add(a, b):
    return a+b

def sub(a,b):
    return a-b

if __name__ =="__main__": #모듈 사용 시 실행 안됨
    print(add(1,4))
    print(add(4.2))
```

이떄, 경로가 같으면 바로 import할 수 있지만 sub폴더 안에 있다면 path(경로)를 추가해주어야 합니다.
<br/>
경로는 아래와 같이 지정해 줄 수 있습니다.

`index3.py`

```python
from sys
sys.path.append("C:||jocoding||폴더이름")
import mod2
print(mod2.add(3,4))
```

<hr/>

# 패키지

패키지는 라이브러리로 생각할 수 있습니다. 즉, 모듈을 여러 개 모아놓은 것이라고 할 수 있습니다.
<br/>
패키지를 실행할 때는 하나씩 이동하면 됩니다. 아래의 코드를 참고하세요.

```python
import game.sound.echo
game.sound.exho_test()
```

이름이 하나씩 들어가야 하는 이유는 하나하나가 모두 폴더로 이루어져 있기 때문입니다.
<br/>
또한 불러온 것의 이름을 바꾸어 사용하는 것은 아래와 같습니다.

```python
from game.sound.echo import echo_test as e
e()
```

긴 이름대신 사용할 수 있으니 한결 편리할 것 같습니다.

```python
from game.sound import *
eho.echo_test()
```

별표를 쓰면 싹 다 가져오는 것입니다. 참고로, 그냥 `*` 를 사용하면 오류가 나고 `__init__.py` 에 아래와 같이 설정을 해주어야 합니다.

`__init__.py`

```python
__all__ =['echo', 'echo2']
```

참고로 `import`할 때 폴더이름 앞에 `..`을 쓰게 되면 이전 폴더를 의미합니다.

<hr/>

# 예외 처리

오류를 미리 잡아줄 떄 사용하는 것이 예외 처리입니다.

`index3.py`

```python
try:
    4/0
except ZeroDivisionError as e:
    print(e)
```

`try`안쪽에서 에러가 발생하면 발생한 에러이름을 찍어주라는 의미입니다.
<br/>
이것이 유용한 이유는 긴 코드가 있을 떄 그 코드의 전체적 구동에 문제가 생기는 것이 아니라 에러문구를 찍어주고 계속 진행되도록 유도할 수 있기 때문입니다.
<br/>
두번째 예외처리 방법은 아래와 같습니다.

`index4.py`

```python
try:
    f = open('none', 'r')
except FileNotFoundError as e:
    print(str(e))
else:
    data = f.read()
    print(data)
    f.close()
```

`file open` 에 성공하면 else이후의 내용이 실행됩니다.
<br>
또한 파일을 열어준 경우에는 무조껀 파일을 닫아주는 것이 좋은데, 이 경우 위의 코드를 아래와 같이 변경할 수 있습니다.

`index4.py`

```python
f = open('foo.txt', 'w')
try:
    #무언가를 수행한다.
    data = f.read()
    print(data)
except Exception as e:
    # Exception으로 거의 모든 오류를 잡을 수 있다.
    print(e)
finally:
     f.close()# 마지막에 무조건 이 내용을 실행
```

예외처리는 DB등을 왔다갔다 할 때 등 여러 서버를 동시에 사용하면 좋습니다.

또한 오류를 그냥 지나가게 하는 `pass` 명령어도 있습니다.
이 명령을 사용하면 오류가 나도 계속 동작하게 됩니다.

`pass사용 사례`

```python
try:
    f = open("나 없는 파일", 'r')
except FileNotFoundError:
    pass
    #오류 발생 안함
```

<br/>

`raise` 는 강제로 오류를 발생시키는 명령어인데 특정 경우에 무조껀 수정해서 사용하라는 메세지를 프로그래머에게 전달하고 싶을 때 사용하게 됩니다.

`raise사용 사례`

```python
class Bird:
    def fly(self):
        raise NotImplementedError
        #오류명에 따른 다른 오류 발생

class Eagle(Bird):
    def fly(self):
        print("very fast")

eagle = Eagle()
eagle.fly()
```

<hr/>
다음시간에는 내장함수 외장함수에 대해 알아보도록 합니다.
