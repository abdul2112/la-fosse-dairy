require('dotenv').config()
const fs = require('fs')
const db = require('./connect')


const sql = fs.readFileSync(__dirname+'/diary.sql').toString()

db.query(sql)
    .then((data) => {
        console.log("Setup complete")
        db.end()
    })
    .catch((error)=> {
        console.log(error)
    })