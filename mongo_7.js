use catalog

//1
db.books.update(
    { pageCount: 1234 },
    {$set:{ title: '1,2,3,4 to java', status: 'publish'}},
    { upsert: true })
//2
db.books.updateMany({title:/^b/i},{$unset:{publishedDate:true}})

//3
db.books.updateOne({status:"PUBLISH",$exist:{spublishedDate:false}},{ $currentDate: { updatedDate: true} })
db.books.update({},{$set:{price:10}})
//5
db.books.updateMany({categories:{$all:['Java']}},{$mul:{price:1.1}});
//6
db.books.updateMany({title:/c#/i},{$currentDate:{lastModified:true}},{$inc:{pageCount:-20}});
//7
db.books.updateMany({},{$max:{pageCount:0}},{$currentDate:{lastModifiedPages:true}})
//8
db.books.updateMany({},{$rename:{lastModifiedPages:lastModified}});
//9
db.books.updateMany({},{$min:{pageCount:1000}});
//10
db.books.updateMany({$or:[{categoties:{$size:0}},{categories:null}]},{$unset:{categories:true}});
db.books.updateMany({$or:[{authors:{$size:0}},{authors:null}]},{$unset:{categories:true}});