# money = 3000
# now = 4000
# if money < now:
#     print("택시를 타고 가라")
# else:
#     print("걸어가라")


money = 3000
now = 1000
card = 1
if money < now:
    print("택시를 타고 가라")
elif card:
    print("택시를 타고 가라")
else:
    print("걸어가라")

treeHit = 0
while treeHit < 10:
    treeHit = treeHit + 1
    print("나무를 %d번 찍었습니다. " % treeHit)
    if treeHit == 10:
        print("나무 넘어갑니다. ")
