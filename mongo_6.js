db.getCollection("books").find({})
//6
db.books.remove(db.books.find({'categories':{$exists:0}}))
//7
db.books.find({'thumbnailUrl':{$exists:0}})
//8
db.books.find({'authors':{$all:["Robi Sen"]} },{ title:1,longDescription:1})
//9
db.books.find({'authors':{$all:[/a/i]} },{ title:1,longDescription:1,authors:1})
//10
db.books.find({categories:['XML','Internet']})
//11
db.books.find({categories:{$all:['XML','Internet']}})
//12
db.book.countDocuments(find({'authors':{$all:[""]}}))
//13
db.book.countDocuments({'authors.3':""})
//14
db.books.find({_id:{$not:{$type:7}}})


