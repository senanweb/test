# telephone guide
names = {'name0':{'name':'amal','phone': 111},
         'name1':{'name':'sss', 'phone': 112},
        }
print(names['name0']['phone']) # view data in name
print('=' * 50)
print ('amal' in names['name0'].values())
print('=' * 50)
ch_num = int(input('insert number : '))
if ch_num in names['name0'].values():
        print('yes is exist and the name is', names['name0']['name'])
elif ch_num in names['name1'].values():
        print('yes is exist and the name is', names['name1']['name'])
else:
        print('Sorry, the number is not found ')
print('=' * 50)









# name = input ('insert name ')
# if name == names['name']:
#     print ('welcome ', names)
# else:
#     print ('try again')
# print('=' * 50)

# print(type(ch_one))

# print(ch_one.keys()) # view head of data

# reco1 = {'name': 'amal', 'phone': 111}
# reco2 = {'name': 'ssss', 'phone': 112}
# all_reco = {'one': reco1 , 'two': reco2}
# member.update({"country” : “Egypt”, }) == update

# b = main.copy() == copy from dic
# print(user.setdefault("age", 36)) == input data to dic
