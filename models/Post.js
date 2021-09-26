const { Sequelize } = require('sequelize');

const db = require('../config/db');

const  Post = db.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    keywords: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    }
})

module.exports = Post;