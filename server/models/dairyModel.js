const db = require('../db/connect')

class Diary {
    constructor({diary_id, title, diary_entry}){
        this.diary_id = diary_id
        this.title = title
        this.diary_entry = diary_entry
    }

    static async getAll(){
        // console.log("after getAll() called");
        const response = await db.query("SELECT * FROM diary;")
        // console.log(response)
        if(response.rows.length === 0){//returns an array so length can be used
            throw Error("No diary entries available")
        }
        return response.rows.map(d => new Diary(d)) //create new objects with data

    }

    static async getOneById(id){
        // console.log("after getAll() called");
        const response = await db.query("SELECT * FROM diary WHERE diary_id = $1;", [id])
        // console.log(response)
        if(response.rows.length !== 1){//returns an array so length can be used
            throw Error("No diary entry available")
        }
        return new Diary(response.rows[0]) //create new objects with data

    }

    static async create(data){
        const {title, diary_entry} = data
        const exisitngDiaryName = await db.query("SELECT * FROM diary WHERE LOWER(title) = LOWER($1);", [title])
        if(exisitngDiaryName.rows.length === 0) {
        let response = await db.query("INSERT INTO diary (title, diary_entry) VALUES ($1, $2) RETURNING *;", [title, diary_entry])
            return new Diary(response.rows[0])
        } else{
            throw new Error("Diary with this title already exists!")
        }
    }

    async update(data) {
        const {title, diary_entry} = data
        const response = await db.query("UPDATE diary SET title = $1, diary_entry = $2 WHERE diary_id = $3 RETURNING *;", [title, diary_entry, this.diary_id])
        if(response.rows.length !== 1) {
            throw new Error("Unable to update diary")
        } else {
            return new Diary(response.rows[0])
        }
    }

    async destroy() {
        const response = await db.query("DELETE FROM diary WHERE diary_id = $1 RETURNING *", [this.diary_id])
        return new Diary(response.rows[0])
    }
}

module.exports = Diary