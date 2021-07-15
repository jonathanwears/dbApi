import Word from './models/Word.js';

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const words = await Word.getAll();
        res.send(words);
    }
    catch(err) {
        console.log(err);
    };
};

controller.create = async (req, res) => {
    try {
        const create = await Word.create(req); 
    }
    catch(err) {
        console.log("error from controller.create " + err);
    };
};

controller.editEntry = async (req, res) => {
    
    try{
        const editEntry = await Word.editEntry(req);
    }catch(err) {
        console.log("error from controller.editEntry " + err)
    }
}

export default controller;