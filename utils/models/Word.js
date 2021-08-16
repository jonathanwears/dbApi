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
    async function updateDocument() {
      const doc = await WordModel.findOne({_id: req.body.id});
      doc.englishWord = req.body.englishWord;
      doc.germanWord = req.body.germanWord;
      doc.save();
    };
    updateDocument();
  }

  WordModel.deleteEntry = (req, res) => {
    const id = req.body
    console.log(id)
    async function deleteDocument() {
      await WordModel.findByIdAndDelete(id);
    };
    deleteDocument();
  };

  

export default WordModel;
