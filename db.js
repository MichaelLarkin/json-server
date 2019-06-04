var dateFns = require('date-fns');
var faker = require('faker');

const theFirstDate = '2019-1-1'

function generateSummary() {
    let theDate = new Date(theFirstDate);
    let summary = [];

    for (let ii = 1;  ii <= 365; ii++) {

        /* let myDate = theDate.toLocaleDateString(); */
        let myDate = dateFns.format(theDate, 'MM/DD/YYYY');
        console.log(myDate);

        let id = ii;
        let date =  myDate;
        let prod = faker.random.number( { min: 0, max: 5 } );
        let uat = faker.random.number( { min: 0, max: 10 } );
        let qa = faker.random.number( { min: 0, max: 15 } );
        let test = faker.random.number( { min: 0, max: 20 } );
        let dev = faker.random.number( { min: 0, max: 25 } );

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

    return { "summary": summary };
}

function generateDetail() {
    let theDate = new Date(theFirstDate);
    let detail = [];

    for (let ii = 1;  ii <= 365; ii++) {
        let myDate = theDate.toLocaleDateString();

        let id = ii;

        let start_date = myDate;
        let end_date = myDate;

        let server_name = "njunvfake" + ii;
        let server_type = "virtual";
        let server_ips = [ "192.168.103.44" ]
        let server_os = "RHEL 5.6";
        let server_owners = { "it": [ "Abby Normal", "Farley Demented" ],
                              "biz": [ "Gravely Disturbed", "Nether Satisfied" ] };
        let server_zone = "corporate";
        let server_site = "union";
        let server_apps = [ { "AppLate": [ "Ned Reqs", "Noa Idea"] },
                            { "Appache": [ "Crash A. Lot"] } ]

        let server = { "name": server_name,
                       "type": server_type,
                       "ips": server_ips,
                       "os": server_os,
                       "owners": server_owners,
                       "zone": server_zone,
                       "site": server_site,
                       "server_apps": server_apps
                     }

        let apply_os_patch = "RHEL 5.7";
        let apply_os_patches = [ { "server": server,
                                   "apply_os_patch": apply_os_patch } ];

        let prod_patches = apply_os_patches;
        let uat_patches = apply_os_patches;
        let qa_patches = apply_os_patches;
        let test_patches = apply_os_patches;
        let dev_patches = apply_os_patches;

        let patches = { "prod": prod_patches,
                        "uat": uat_patches,
                        "qa": qa_patches,
                        "test": test_patches,
                        "dev": dev_patches };
        detail.push({
                "id": id,
                "start_date": start_date,
                "end_date": end_date,
                "patches": patches
            }
        )
        theDate.setDate(theDate.getDate() + 1);
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
