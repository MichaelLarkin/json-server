var faker = require('faker');

function generateSummary() {
    var summary = [];

    for (var ii = 0;  ii < 4; ii++) {
        var id = ii;
        var date = ii
        var prod = ii;
        var uat = ii;
        var qa = ii;
        var test = ii;
        var dev = ii;

        summary.push({
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
    console.log(summary);
    return { "summary": summary }
}

module.exports = generateSummary;