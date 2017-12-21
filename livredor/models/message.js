let connection = require('../config/connection')

class Message {


	static create (content, callback) {
		connection.query('INSERT INTO messages SET content = ?, created_at = ?', [content, new Date()], (err, result) => {
		if (error) throw error;	
		callback(result)
		})
 
});

	}
}

module.exports = Message

