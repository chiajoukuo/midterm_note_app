const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const MessageSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title field is required.']
	},
	category: {
		type: String,
		required: [true, 'Category field is required.']
    },
    location: {
		type: String
	},
    url: {
		type: String
    },
    img: {
		type: String
    },
    discription: {
		type: String
	}
})

// Creating a table within database with the defined schema
const Message = mongoose.model('message', MessageSchema)

// Exporting table for querying and mutating
module.exports = Message