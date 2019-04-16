#1 Union
set1 = {1,2,3}
set2 = {2,3,4}
union = {x for x in set1 if x not in set2} | set2
print(union)

#2 Intersection
set1 = {1,2,3}
set2 = {2,3,4}
intersection = {x for x in set1 if x in set2}
print(intersection)

#3 Set Difference
set1 = {1,2,3}
set2 = {2,3,4}
#between set 1 and 2
set_diffa = {x for x in set1 if x not in set2}
#between set 2 and 1
set_diffb = {x for x in set2 if x not in set1}
print(set_diffa)
print(set_diffb)

#4 Symmetric Difference
set1 = {1,2,3}
set2 = {2,3,4}
symm_diff = {x for x in set1 if x not in set2}|{x for x in set2 if x not in set1}
print(symm_diff)

#5 Cartesian Product
set1 = {1,2}
set2 = {'red','white'}
cart_pro = {(x,y) for x in set1 for y in set2}
print(cart_pro)

#6 Set Multiples
set1 = {1,2,3}
set2 = {2,3,4}
sets_mult = {x*y for x in set1 for y in set2}
print(sets_mult)