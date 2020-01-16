'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
	name: {
		type: String,
		required: 'Kindly enter the name of the Person'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type:[{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Persons', PersonSchema);