const path = require('path')
const express = require('express');
const router = express.Router()
const rootDir = require('../util/path.js')
router.get('/', (req, res, next)=>{
  res.sendFile(path.join(rootDir, 'Views', 'Shops.html'))
}) 

module.exports = router;