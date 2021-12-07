import * as fs from 'fs';
import { promisify } from 'util';

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

    console.log(typeof(data.split("\n")));
    return {
        headers: {
            'content-type':'text/html',
        },
        body: "<p>Hello</p>"
    }
}