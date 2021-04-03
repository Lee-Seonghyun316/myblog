---
title: 그리디 알고리즘 문제풀이
date: 2021-04-04 16:12:04
category: algorithm
thumbnail: './image/'
draft: false
---

**문제설명**

![ex_screenshot](./image/4_1.png)

![ex_screenshot](./image/4_2.png)

**문제조건**

![ex_screenshot](./image/4_3.png)

**내 아이디어**

제 아이디어를 간략히 정리한 것으로 참고만 하시면 좋을 것 같습니다.

- 공포도가 적은 수의 모험가부터 그룹을 만들어 줍니다.
- 모험가의 공포도보다 남은 인원수가 적으면 그 모험가부터 다음모험가들은 모험에 참여시키지 않습니다. (반복문 탈출)

**파이썬 코드**

`내가 짠 코드`

```python
N = int(input())  # 7

horror = input()  # 3355777
arr = []
for i in range(0, N):
    arr.append(int(horror[i]))
# arr = list(map(int, input().split()))
print(arr)
arr_sort = sorted(arr)
print(arr_sort)
print("len", len(arr_sort))

# 문제점 :
# 0번 인덱스가 3일 떄
# 2번 인덱스가 5이면
# 다시 0번부터 4번까지하고
# 4번을 확인하는데 이떄 4가 7이면
# 0부터 6까지하고
# 6이 7이면 카운트 증가


# - 모험가의 공포도보다 남은 인원수가 적으면 그 모험가부터 다음모험가들은 모험에 참여시키지 않습니다. (반복문 탈출)
# 이부분도 구현 하지 못함
count = 0
i = 0
while(i != (len(arr_sort)-1)):
    print("ii:", i)
    plus_index = arr_sort[i]-1  # 3-1 = 2
    print(plus_index)
    while(arr_sort[i+plus_index] > arr_sort[i]):  # 5>3, 7>5
        print(arr_sort[i+plus_index], ">", arr_sort[i])
        temp = plus_index  # 2 # 2
        plus_index = arr_sort[i+plus_index]-arr_sort[i]  # 5-3 # 7-5
        i += temp  # 2 # 4
        print(plus_index)
        print(i)
    count += 1
    i += plus_index
    print("i:", i)
print("count", count)

# plus_index = arr[i]-1
# group = arr[i]
# while(arr[i+plus_index] > arr[i]):
#     plus_index = arr[i+plus_index]-arr[i]
#     i += plus_index -1
#     # for j in range(i,i+plus_index):

# if arr[i+plus_index] > arr[i]:
#     i += plus_index
#     for j in range(i,len(arr)):
#         plus2_index = arr[j]-1
#         if arr[i+plus2_index] > arr[i]:
#             j += plus_index
#             for k in range(j,len(arr)):
#                 pluss3_index = arr[k]-1
#         else:
#             count += 1
#             break;
# else :
#     count += 1
```

**문제 해결 아이디어**

- 오름차순 정렬 이후 공포도가 낮은 모험가부터 확인한다.
- 앞에서부터 공포도를 하나식 확인하며 '현재 그룹에 포함된 모험가의 수'가 '현재 확인하고 있는 공포도'보다 크거나 같다면 이를 그룹으로 설정하면됩니다.
- 이러한 방법을 이용하면 공포도가 오름차순으로 정렬되어 있다는 점에서, 항상 최소한의 모험가의 수만 포함하여 그룹을 결성하게 됩니다.

**파이썬코드**

`정답.py`

```python
N = int(input())  # 7

horror = input()  # 3355777
arr = []
for i in range(0, N):
    arr.append(int(horror[i]))
# arr = list(map(int, input().split()))
print(arr)
arr_sort = sorted(arr)
print(arr_sort)
print("len", len(arr_sort))

result = 0  # 총 그룹 수
count = 0  # 현재 그룹에 포함된 모험가 수

for i in arr_sort:
    count += 1
    if count >= i:
        result += 1
        count = 0
        print(result)
print("result:", result)
```

**문제 해결에 실패한 이유**

- 현재 확인하고 있는 공포도와 그룹에 있는 모험가의 수만 비교하여 그룹을 결성하면 되는데, indexing을 통해 공포도 차를 통해 모험가의 수를 추가하려고 하다 보니 복잡한 문제 풀이가 된 것 같다.
