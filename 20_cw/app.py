from functools import reduce
from collections import Counter


import itertools
import operator

def most_common(L):
  # get an iterable of (item, iterable) pairs
  SL = sorted((x, i) for i, x in enumerate(L))
  # print 'SL:', SL
  groups = itertools.groupby(SL, key=operator.itemgetter(0))
  # auxiliary function to get "quality" for an item
  def _auxfun(g):
    item, iterable = g
    count = 0
    min_index = len(L)
    for _, where in iterable:
      count += 1
      min_index = min(min_index, where)
    # print 'item %r, count %r, minind %r' % (item, count, min_index)
    return count, -min_index
  # pick the highest-count/earliest item
  return max(groups, key=_auxfun)[0]

fd = open('data.txt', 'r')
book = fd.read().lower()
count=0
fd.close()



print("Count of proletariat: " + str(book.count('proletariat')))
print("Count of 'working class': " + str(book.count('working class')))

alphabet = "abcdefghijklmnopqrstuvwxyz"
words = []
current = ""
for char in book:
    if char in alphabet:
        current+=char
    elif current!="":
        words.append(current)
        current=""

#print(words)

# count=0
# for x in words:
#     if x=="proletariat":
#         count+=1
# print(count)

common_words = ["the", "and", "to", "by", "is", "in", "of", "a", "that", "it", "them"]
max_word = ""
max_count = 0
for x in words:
    if words.count(x)>max_count and x not in common_words:
        max_count = words.count(x)
        max_word = x


list=[[x,words.count(x)] for x in words if x not in common_words]
#print(most_common(list))

word=[x for x in list if x[1]==max_count]
w=word[0][0]
wc=word[0][1]
print("Max uncommon word: " + str(w) + "; Count: " + str(wc))
