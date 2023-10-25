const fs = require('fs');


let choose = 1;

let path_old = 'old.json';
let path_new = 'new.json';

if (choose){
    path_old = "app/"+path_old
    path_new = "app/"+path_new
}else{
    path_old = "web/"+path_old
    path_new = "web/"+path_new
}


fs.readFile(path_old, 'utf8', (err, data) => {
    try {
        if (err){
            console.log(err)
        }

        let json1 = JSON.parse(data);
        fs.readFile(path_new, 'utf8', (err, data) => {

            try {

                if (err){
                    console.log(err)
                }

                let json2 = JSON.parse(data);
                compareJSON(json1, json2);
            } catch (parseError) {

            }
        });
    } catch (parseError) {
    }
});

function compareJSON(json1, json2) {
    console.log("New word");
    const missingKeys = Object.keys(json2).filter(key => !json1.hasOwnProperty(key));
    missingKeys.forEach(key => {
        let info = {
            [key]:json2[key]
        }
        console.log(info)
    });
    console.log("____________________________________________________________________________")
    console.log("Edit word");
    for (const key in json1) {
        if (json1.hasOwnProperty(key) && json2.hasOwnProperty(key)) {
            if (json1[key] === json2[key]) {
            
            } else {
                let info = {
                    [key]:{
                        "old":json1[key],
                        "new":json2[key],
                    }
                }
                console.log(info)
            }
        }
    }
}
