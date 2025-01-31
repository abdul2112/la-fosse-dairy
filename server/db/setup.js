require('dotenv').config()
const fs = require('fs')
const db = require('./connect')


const sql = fs.readFileSync('./server/db/diary.sql').toString()

db.query(sql)
    .then(data => {
        db.end()
        console.log("Setup complete", data)
    })
    .catch((error)=> console.log("Setp error" + error))



// async function testQuery() {
//     try {
//         const res = await db.query("SELECT * FROM diary;");
//         console.log("data", res.rows);
//     } catch (error) {
//         console.error("cannot get diary entries:", error);
//     }
// }

// testQuery();