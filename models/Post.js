const { Sequelize, DataTypes } = require('sequelize');
const moment = require('moment');

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
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
        }
}
})

module.exports = Post;