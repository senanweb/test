# Type for sequence (list-tuple-string)
names = ["salawe","mahmood",'nadom', 'sinan',"omar"]
print(names) 
print(names[2]) 
print(names[-1])
# =========update list
names[3] = "Arkan"
print(names)
# ======== Append to list
names.append('Hakam')
print(names)
# ======== insert to list
names.insert(1,'habeeb')
print(names)
# ======== remove to list
names.remove('Hakam')
print(names)
# ======== clear to list
names.clear()
print(names)
# Tuples
ch_one = ('xxx', 'ooo', '12-10-1977')
ch_tow = 'xxx', 'ooo', '12-10-2011'
print(type(ch_one))
print(type(ch_tow))