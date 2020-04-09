printjson(db.people.find(
    {
        nationality: {$eq: "Germany"},
        sex: {$eq: "Male"}
    }
).toArray())
