import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  germanWord: String, 
  englishWord: String,
});

const WordModel = mongoose.model('word', wordSchema);

WordModel.getAll = () => WordModel.find({});

WordModel.create = (req, res) => {
    const newWords = new WordModel({
      germanWord: req.body.germanWord,
      englishWord: req.body.englishWord
    })
    newWords.save();
  };

WordModel.editEntry = (req, res) => {
  WordModel.findByIdAndUpdate(req.body.id,
      { "germanWord": req.body.germanWord,
        "englishWord": req.body.englishWord
      });
}; 

export default WordModel;
