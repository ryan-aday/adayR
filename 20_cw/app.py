from functools import reduce

fd = open('data.txt', 'r')
book = fd.read().lower()
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
print("Max uncommon word: " + str(max_word) + "; Count: " + str(max_count))
