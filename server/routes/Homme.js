const express = require('express');
const { addHomme,getAllHomme,getOneHomme ,UPDATEHomme,deliteHomme} = require('../controllers/Homme');

const router = express.Router();

router.get('/getall', getAllHomme)
router.post('/add',addHomme )
router.get("/get/:id",getOneHomme)
router.put('/put/:id',UPDATEHomme)
router.delete("/delite/:id",deliteHomme)

module.exports = router;