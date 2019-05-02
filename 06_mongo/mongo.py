# Ryan Aday
# SoftDev pd07
# K10 -- Mongo
# 2019-05-01


import pymongo
from pprint import pprint

SERVER_ADDR="206.189.89.126"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

#[pprint(post) for post in collection.find({"name":"Wendy's"})]

def boro(b):
    [pprint(post) for post in collection.find({"borough":b})]

def zip(z):
    [pprint(post) for post in collection.find({"address.zipcode":z})]

def gradezip(zip,grade):
    [pprint(post) for post in collection.find({"address.zipcode":zip,"grades.grade":grade})]

def threshold(zip,threshold):
    [pprint(post) for post in collection.find({"address.zipcode":zip,"grades.score": {"$lt":threshold} })]
