answer = 7
print(f"정답은 {answer} 입니다. ")

a = 5

if a >= 0:
    print("a >=0")
elif a >= -10:
    print("-10 <= a <= 0")
else:
    print("-10 > a")

scores = [90, 85, 77, 65, 97]
cheating_stuedent_list = {2, 4}

for i in range(5):
    if i + 1 in cheating_stuedent_list:
        continue
    if scores[i] >= 80:
        print(i + 1, " 번 학생은 합격")

for i in range(2, 10):
    for j in range(1, 10):
        print(i, "X", j, "=", i*j)
    print()

array = [('홍길동', 50), ('이순신', 32)]


def my_key(x):
    return x[1]


print(sorted(array, key=my_key))
print(sorted(array, key=lambda x: x[1]))
