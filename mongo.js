//1
//mongoimport --db catalog --collection books --file catalog.books.json

//2
db.books.find()

//3
db.books.find({isbn:'1933988797'})

//4
db.books.find({title:/java/i},{title})

//5
db.books.find({status:'PUBLISH'},{title,publishedDate,_id})

//6
db.books.find({pageCount:{$gt:100}},{title,amount,isbn})

//7
db.books.find({title:/c#/i})

//8
db.books.find({title:/\a/})

//9
db.books.find({pageCount:{$gt:10},pageCount:{$lt:100}},{title,pageCount})

//10
db.books.find({title:/r/i})

//11
db.books.find({title:/data/i},{title})

//12
db.books.find({title:/\e/},{_id,title})

//13
db.books.find().sort({title:1})

//14
db.books.find().sort({title:-1})

//15
db.books.countDocuments({title:/^j/i})

//16
db.books.find().sort({pageCount:-1}).limit(5)

//17
db.books.find({categories:{$exits:false}})

//18
db.books.find({shortDescription:{$exits:true}})

//19
db.books.countDocuments({_id:{$type:ObjectId}})
