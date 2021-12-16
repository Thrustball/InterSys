import sqlite from 'sqlite3';
import { count } from '/src/routes/stores/store1.js';

export const get = (request) => {
    var htext2 = '<p>Error: Input fields should not be empty!</p>';
    var count_value;
    const unsubscribe = count.subscribe(value => {
		count_value = value;
        console.log(value);
	});

    let db = new sqlite.Database('./src/routes/firstLayout/test2.db', sqlite.OPEN_READWRITE, (err) => {
        if (err) {
          console.error(err.message);
        }
        // console.log('Connected to the names database.');
      });
      const inStr = "INSERT INTO Counting (count) VALUES ('" + count_value + "');";
      db.run(inStr, (err) => {
        if(err) {
            return console.log(err.message);
        }
    });
      // console.log(inStr);
    db.close();
    unsubscribe();
    htext2 = '<p>Database updates</p>';
    
    return {
        headers: {
            'content-type': 'text/html',
        },
        body: htext2,
    }
};
