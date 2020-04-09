printjson(db.people.find({job:{$eq:"Editor"}}).forEach(function(data) {
    db.people.update({
        "_id": data._id
    }, {
        "$unset": {
            email: ""
        }
    });
}))
