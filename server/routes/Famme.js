const express = require('express');
const { addFamme,getAllFamme,getOneFamme ,UPDATEFamme,deliteFamme} = require('../controllers/Famme');

const router = express.Router();


router.get('/getall', getAllFamme);


router.post('/add', addFamme);


router.get('/get/:id', getOneFamme);


router.put('/update/:id', UPDATEFamme); 


router.delete('/delete/:id', deliteFamme); 

module.exports = router;
