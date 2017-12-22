let connection = require('../config/db')
let moment = require('moment')

class Message {

	constructor (row) {
		this.row = row
	}
	get id () {
		return this.row.id
	}
	get content () {
		return this.row.content
	}
	get created_at () {
		return moment(this.row.created_at)
	}


	static create (content, callback) {
		//let query = 
		connection.query('INSERT INTO messages SET content = ?, created_at = ?', [content, new Date()], function (err, result) {
		if (error) throw error;	
		callback(result)
		//console.log(query.sql)
		})
	}

	static all (content, callback) {
		//let query = 
		connection.query('SELECT * FROM messages', function (err, rows) {
		if (error) throw error;	
		callback(rows.map((row) => new Message(row)))
		//console.log(query.sql)
		})
	}

	static find (id, callback) {
		//let query = 
		connection.query('SELECT * FROM messages WHERE id =? LIMIT 1', [id], function (err, result) {
		if (error) throw error;	
		callback(new Message(row[0]))
		//console.log(query.sql)
		})
	}
}

module.exports = Message

