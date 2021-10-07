const { Sequelize, DataTypes } = require('sequelize');
import { format } from 'date-fns';

const db = require('../config/db');

const  Post = db.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
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
        type: DataTypes.DATE,
        get() {
            return format(new Date(), "do MMMM Y")
        }
}
})

module.exports = Post;