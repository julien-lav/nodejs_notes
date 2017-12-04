var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;


var jeu = new EventEmitter();

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
	
	var params = querystring.parse(url.parse(req.url).query);

    res.writeHead(200, {"Content-Type": "text/plain"});
     if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.write(' Bien le bonjour');

    server.on('close', function() { 
    console.log('Bye bye !');

	})
// ????
    res.end();
// ????
});

server.listen(8080);
// server.close(); 


