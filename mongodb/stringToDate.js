db.people.find().forEach(function(data) {
    db.people.update({
        "_id": data._id
    }, {
        "$set": {
            "birth_date": new Date(data.birth_date)
        }
    });
})
