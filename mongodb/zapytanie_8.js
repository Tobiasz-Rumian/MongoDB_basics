printjson(db.people.find({"location.city":{$eq:"Moscow"}}).forEach(function(data) {
    db.people.update({
        "_id": data._id
    }, {
        "$set": {
            "location.city": "Moskwa"
        }
    });
}))

