#8
pyth=[]
a=7
#b=[x for x in range(y+1) for y in range(z+1) for z in range(2, a+1) if (x**2 + y**2) == z**2]
b=[[x,y,z] for z in range(y, a+1) for y in range(x, z+1) for x in range(y+1) if (x**2 + y**2) == z**2]
print ("#8: "+str(b))
#9
data=[2, 0, -1, 3]
y=[z for z in range(t) for t in range(len(data)) if z<=t]
print("#8: "+str(y))