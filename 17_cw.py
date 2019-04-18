
#1
y=[2*str(x*2) for x in range(5)]
print("#1: "+str(y))

#2
y=[7+x*10 for x in range(5)]
print("#2: "+str(y))

#3  Compost=e
y=[x*y for x in range(3) for y in range(3)]
print("#3: "+str(y))

#4
complists=[]
y=[complists.append(x) for x in range(101) for y in range(2,x) if x%y==0 and x not in complists]
print("#4: "+str(complists))

#5
lists=[]

y=[lists.append(x) for x in range(101) for y in range(2,x) if x%y!=0 and
   x not in complists and x not in lists]
print("#5: "+str(lists))

#6
x=2001
y=[t for t in range(1,x+1) if x%t==0]
print("#6: "+str(y))

#7
mat=[[3,0,1],[2,1,7],[3,6,9]]
y=[[mat[i][j] for i in range (len(mat))]
 for j in range(len(mat))]
print("#7: "+str(y))

# Ans: [["A", "F"]["B", "G"], ["C", "H"]]

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
