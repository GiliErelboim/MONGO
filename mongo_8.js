db.getCollection("catalog").find({})
//1
db.catalog.distinct('title').map(b => b.toUpperCase());
//2
db.catalog.distinct('categories').map(b => {
    let count = db.catalog.countDocuments({categories:b})
    return b+' : '+count
});
//4
db.catalog.aggregate([
    { $match: { status: 'PUBLISH' } },
    { $project: { status: 0 } },
    { $set: { is_published: true} }

])
