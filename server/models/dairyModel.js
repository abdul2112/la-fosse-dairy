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
        const {date, title, diary_entry} = data
        const response = db.query("INSER INTO diary (date, title, diary_entry) VALUES ($1, $2, $3) RETURNING *;", [date, title, diary_entry])
        return new Diary(response.rows[0])
    }
}