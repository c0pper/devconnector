const express = require('express')

const router = express.Router()

//@route    /api/posts/test
//@desc     Test posts route
//@access   Public
router.get('/test', (req, res) => res.json({msg: 'posts work'}))

module.exports = router