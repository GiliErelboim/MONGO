db.getCollection("books").find({})
//1
db.books.find({title:{$in:[/C#/i,/Java/i,/Python/i]}})
//2
db.books.find({isbn:{$nin:[/^19/,188477384,/0/]}})
//3
db.books.find({$nor:[{isbn:/^19/},{title:/mongo/},{pageCount:{$gt:600}}]})
//4
db.books.find({status:{$not:{status:"PUBLISH"}}})
//5
db.books.countDocuments({pageCount:{$mod:[10,0]}})
//7
db.books.find({thumbnailUrl:{$exists:false}})