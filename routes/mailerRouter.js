const express = require("express");
const router = express.Router();
const mailerController = require('../controller/mailerController');


router.get("/home",mailerController.index)
router.post("/mail",mailerController.send)




module.exports = router; 