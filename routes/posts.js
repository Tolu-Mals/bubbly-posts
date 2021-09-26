const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { Sequelize } = require('sequelize');

//Get all posts
router.get('/', (req, res) => {
    Post.findAll()
    .then((posts) => {
        res.render('posts', {
            posts
        }).catch(err => {
            console.log(err);
        })
    })
})


//Render New Post Page
router.get('/write', (req, res) => res.render('write'));

//Create new post
router.post('/write', (req, res) => {
    let { title, content, keywords, author } = req.body;
    let errors = [];

    //Simple error handling
    if(!title){
        errors.push('Please add a title');
    }

    if(!content){
        errors.push('Please add some content');
    }

    if(!keywords){  
        errors.push('Please write some keywords');
    }

    if(!author){
        errors.push('Please add the author');
    }

    if(errors.length > 0){
        res.render('write', {
            errors,
            title,
            content,
            keywords,
            author
        })
    }

    else {
        keywords = keywords.toLowerCase().replace(/, /g, ',');

        Post.create({
            title,
            content,
            keywords,
            author
        }).then(() => res.redirect('/'))
        .catch(err => console.log(err));
    }
});


module.exports = router;