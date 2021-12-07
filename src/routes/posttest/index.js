import sqlite from 'sqlite3';

function buildText(sex, age) {
    return "<p>"+sex+" " + age + "</p>";
}

export const post = (request) => {
    const sex = request.body.get("sex");
    const age = request.body.get("age");
    console.log(request);
    // const htext = buildText(sex, age);
    var htext2 = '<p>Error: Input fields should not be empty!</p>';

    if(sex != '' && age != '') {

    let db = new sqlite.Database('./src/routes/posttest/test.db', sqlite.OPEN_READWRITE, (err) => {
        if (err) {
          console.error(err.message);
        }
        // console.log('Connected to the names database.');
      });
      const inStr = "INSERT INTO demographie (sex, age) VALUES ('" + sex + "', '" + age + "');";
      db.run(inStr, (err) => {
        if(err) {
            return console.log(err.message);
        }
    });
      // console.log(inStr);
    db.close();
    htext2 = '<p>Database updates</p>';
    }
    return {
        headers: {
            'content-type': 'text/html',
        },
        body: htext2,
        
    };
};

