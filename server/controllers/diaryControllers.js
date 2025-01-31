const Diary = require('../models/dairyModel');

async function create(req, res) {
    try {
        const data = req.body;
        const diary = await Diary.create(data);
        console.log(diary, "diary hit")
    res.status(201).json(diary);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

module.exports = {create}