#Ryan Aday
#SoftDev2 pd8
#K22 -- Closure
#2019-05-01

#1-repeat

def repeat(x, t=0):
    return x*t

r1=repeat("hello", 2)
r2=repeat("goodbye", 2)
print(r1)
print(r2)
print(repeat("cool", 3))

#2-make counter
def make_counter(t=0):
    def counter():
        nonlocal t
        t+=1
        return t
    return counter


ctr1 = make_counter()
print(ctr1())
#ctr1() -> 1
print(ctr1())
#ctr1() -> 2

ctr2 = make_counter()
print(ctr2())
#ctr2() -> 1
print(ctr1())
#ctr1() -> 3
print(ctr2())
#ctr2() -> 2
