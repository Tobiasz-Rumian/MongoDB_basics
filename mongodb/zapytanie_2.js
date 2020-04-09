printjson(db.people.findOne(
    {
        nationality: {$eq: "China"},
        sex: {$eq: "Female"}
    }
))
