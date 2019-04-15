
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
lists=[]
nwlst=[["A", "B", "C"]
       ["F", "G", "H"]
       ]


print("#7: "+str(y))

# Ans: [["A", "F"]["B", "G"], ["C", "H"]]

y=[lists.append]
