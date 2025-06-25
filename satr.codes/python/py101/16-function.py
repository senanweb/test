def data():
    name = input('please insert your name: ')
    age = input('please insert your age: ')
    print(name, age)
# data()
# can call the function any time
def number(chose):
    i = 1
    while i <= chose:
        print(i)
        i += 1
# number(6)
# in the func you can pass parameter
def number(select):
    for i in range(select):
        print(i)
# number(2) #pass to func sum_num in the line 29
# ==
def sum_num(f1, f2):
    print(f1 + f2)
# sum_num(5, 20)
# pass one or tow or more parameter
def sum_num(f1, f2):
    result = f1 + f2
    return result
value = sum_num(2, 5), #5-2
# print(value)
# pass output to anther func
def sum_num(f1, f2):
    return  f1 + f2
value = sum_num(2, 5)
number(value) #func number  
# number (sum_num(2, 5)) or we can used this
def multiplication(number):
    print('Multiplication result:')
    return number * number


print(multiplication(2))
