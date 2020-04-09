printjson(db.people.find({first_name:{$eq:"Antonio"}}).forEach(function(data) {
    db.people.update({
        "_id": data._id
    }, {
        "$set": {
            hobby: "pingpong"
        }
    });
}))
