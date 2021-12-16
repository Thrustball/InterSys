import * as fs from 'fs';
import { count } from '/src/routes/stores/store1.js';

count.subscribe(value => {
    console.log(value);
});

export async function get() {
    // fs.readdir('.', (err, files) => {
    //     if (err)
    //       console.log(err);
    //     else {
    //       console.log("\nCurrent directory filenames:");
    //       files.forEach(file => {
    //         console.log(file);
    //       })
    //     }
    //   });
    var arr;
    const data = fs.readFileSync('static/cityList.txt',
        {encoding:'utf8', flag:'r'});

    let dataS = data.split("\n");
    const jsonString = JSON.stringify(Object.assign({}, dataS))

    return {
        headers: {
            'content-type':'application/json',
        },
        body: jsonString
    }
}