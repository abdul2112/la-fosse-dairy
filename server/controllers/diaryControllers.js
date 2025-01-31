const Diary = require('../models/dairyModel');

async function index(req, res) {
  try{
    const diaries = await Diary.getAll()
    res.status(200).json(diaries)
  }catch(err){
    res.status(500).json({error: err.message})
  }
}

async function show(req, res) {
  try{
    const diaries = await Diary.getOneById()
    res.status(200).json(diaries)
  }catch(err){
    res.status(404).json({error: err.message})
  }
}


async function create(req, res) {
  try {
    const data = req.body;
    const diary = await Diary.create(data);
    console.log(diary, "diary hit")
    res.status(201).json(diary);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}

module.exports = {create, index}