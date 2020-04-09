printjson(db.people.insertOne({
    "sex" : "Male",
    "first_name" : "Tobiasz",
    "last_name" : "Rumian",
    "job" : "Software Developer",
    "email" : "email@pjwstk.edu.pl",
    "location" : {
        "city" : "city",
        "address" : {
            "streetname" : "streetname",
            "streetnumber" : "61975"
        }
    },
    "description" : "testData",
    "height" : 200.04,
    "weight" : 90.75,
    "birth_date" : "1996-02-28T13:29:37Z",
    "nationality" : "Poland",
    "credit" : [
        {
            "type" : "jcb",
            "number" : "3528595113424319",
            "currency" : "PLN",
            "balance" : "9000000.00"
        }
    ]
}))
