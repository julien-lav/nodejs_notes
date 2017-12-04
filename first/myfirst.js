var http = require('http');
var dt = require('./module');
//To include a module, use the require() function with the name of the module
//Now your application has access to the HTTP module, and is able to create a server
//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)

//monmodule.direBonjour();

//monmodule.direByeBye();

var url = require('url');
//There are built-in modules to easily split the query string into readable parts, such as the URL module.

//The Node.js file system module allow you to work with the file system on your computer.
var fs = require('fs');
// npm install upper-case
var uc = require('upper-case'); 
// npm install mysql 
var mysql = require('mysql')
// npm install formidable
var formidable = require('formidable');
//Module for working with file uploads, called "Formidable".

// npm install nodemailer
var nodemailer = require('nodemailer'); 
//The Nodemailer module makes it easy to send emails from your computer.

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

	/***********************/
	/*						/
	/  CONNECT TO DATABASE  /
	/						/
	/					   */
	/***********************/

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
}); 
	/***********************/
	/*						/
	/    SENDING EMAILS     /
	/						/
	/					   */
	/***********************/

console.log('test');
alert('test !');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juliancito75@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'juliancito75@gmail.com',
  to: 'julien.laville@hotmail.fr',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

	/***********************/
	/*						/
	/     EDITING FILES     /
	/						/
	/					   */
	/***********************/

//The fs.appendFile() method appends 
//specified content to a file. If the file does not exist, the file will be created:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
//The fs.writeFile() method replaces the specified file and content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('mynewfile3.txt', 'Hello content bis!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//Replace the file with a new one:
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
//Delete the file mynewfile2.txt:
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 
//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

	/***********************/
	/*						/
	/   SERVEUR REQUESTS    /
	/						/
	/					   */
	/***********************/

//Create a server object:
http.createServer(function (req, res) {
	
	var q_2 = url.parse(req.url, true);
	var filename = "." + q_2.pathname;
	//fs.readFile('demo.html', function(err, data) {
	fs.readFile(filename, function(err, data) {
		if (err) {
	      res.writeHead(404, {'Content-Type': 'text/html'});
	      return res.end("404 Not Found");
    	} 
	    res.writeHead(200, {'Content-Type': 'text/html'}); 
	//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, 
	//the second argument is an object containing the response headers.
	    res.write("The date and time are currently: " + dt.myDateTime());
	//	
		res.write(uc("Hello World!"));
		res.write(data);
	    res.write(" // ");
	    res.write(" " + req.url + " // ");
	    /*Use the url module to turn the querystring into an object:*/
	    var q_1 = url.parse(req.url, true).query;
	    /*Return the year and month and text from the query object:*/
	    /* /summer/?text=something&year=20&month=july -> 20 july something*/
	    var txt = q_1.year + " " + q_1.month + " " + q_1.text;

	    return res.end(txt);
    });
}).listen(8080); 