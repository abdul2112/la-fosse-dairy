const db = require('../db/connect')

class Diary {
    constructor({diary_id, date, title, diary_entry}){
        this.diary_id = diary_id
        this.date = date
        this.title = title
        this.diary_entry = diary_entry
    }

    static async showAll(){

    }

    static async create(data){
        const {title, diary_entry} = data
        const exisitngDiaryName = await db.query("SELECT * FROM diary WHERE LOWER(title) = LOWER($1);", [title])
        if(exisitngDiaryName.rows.length === 0) {
            let response = await db.query("INSERT INTO diary (title, diary_entry) VALUES ($1, $2) RETURNING *;", [title, diary_entry])
            console.log(response, "response hit")
            return new Diary(response.rows[0])
        } else{
            throw new Error("Diary with this title already exists!")
        }
    }
}

module.exports = Diary