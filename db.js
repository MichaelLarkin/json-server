var faker = require('faker');

var theDate = new Date('2019-1-1');

function generateSummary() {
    var summary = [];

    for (var ii = 1;  ii <= 365; ii++) {
        let myDate = theDate.toLocaleDateString();

        var id = ii;
        var date =  myDate;
        var prod = faker.random.number( { min: 0, max: 5 } );
        var uat = faker.random.number( { min: 0, max: 10 } );
        var qa = faker.random.number( { min: 0, max: 15 } );
        var test = faker.random.number( { min: 0, max: 20 } );
        var dev = faker.random.number( { min: 0, max: 25 } );

        summary.push({
                "id": ii,
                "date": myDate,
                "prod": prod,
                "uat": uat,
                "qa": qa,
                "test": test,
                "dev": dev
            }
        )
        theDate.setDate(theDate.getDate() + 1);
    }

    console.log(summary);
    return { "summary": summary };
}

function generateDetail() {
    var detail = [];

    for (var ii = 4;  ii < 9; ii++) {
        var id = ii;
        var date = ii;
        var prod = faker.random.number( { min: 0, max: 5 } );
        var uat = faker.random.number( { min: 0, max: 10 } );
        var qa = faker.random.number( { min: 0, max: 15 } );
        var test = faker.random.number( { min: 0, max: 20 } );
        var dev = faker.random.number( { min: 0, max: 25 } );

        detail.push({
                "id": ii,
                "date": date,
                "prod": prod,
                "uat": uat,
                "qa": qa,
                "test": test,
                "dev": dev
            }
        )
    }

    return { "detail": detail };
}

function generateData() {
    var data1 = generateSummary();
    var data2 = generateDetail();
    var data = { "summary": data1,
                 "detail": data2 };

    return data;

}


module.exports = generateData;
