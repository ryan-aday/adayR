import random

#getting rid of txt and replacing it with just f removes the stages
def make_HTML_heading(f):
    txt=f()
    def inner():
            return '<h1>'+txt+'</h1>'
    return txt
#commenting this out removes the tags and non-random return
#@make_HTML_heading
def greet():
    greetings=['hello', 'welcome', 'hi', 'hola', 'bueno', 'oo']
    return random.choice(greetings)

greet_heading=make_HTML_heading(greet)
print(greet())
print(greet())
print(greet())
print(greet())

def fib(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1)+fib(n-2)

def memoize(f):
    memo={}
    def helper(x):
        if x not in memo:
            memo[x]=f(x)
        return memo[x]
    return helper

fib=memoize(fib)
print(fib(40))
