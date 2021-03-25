# 1_Greedy_거스름돈
charge = 1700

coin_array = [500, 100, 50, 10]
count = 0

for coin in coin_array:
    if(charge >= coin):
        count += charge//coin
        charge %= coin

print(count)
