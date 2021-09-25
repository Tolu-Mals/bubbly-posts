const express = require('express');
const router = express.Router();

//Get all posts
router.get('/', (req, res) => {
    res.send('List of posts...');
})


//Write a new post
router.get('/write', (req, res) => res.render('write'));


module.exports = router;