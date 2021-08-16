import express from 'express';
import connectToDb from './connect.js';
import Word from './models/Word.js';
import controller from './controller.js';
import cors from 'cors';

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  'headers' : {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  }
}));
const port = 8000;
connectToDb();

const a = Word.getAll();

app.get('/words', (req, res) => {
  controller.getAll(req, res);
});

app.post('/create', (req, res) => {
  controller.create(req);
  res.end();
});

app.patch('/editEntry', (req, res) => {
  controller.editEntry(req);
  res.end();
}); 

app.delete('/deleteEntry', (req, res) => {
  controller.deleteEntry(req);
  res.end();
});

app.listen(port, () => {
  console.log('server started - ', port);
});
