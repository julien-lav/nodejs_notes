

var nodemailer = require('nodemailer'); 
var fs = require('fs');

//var serializeMail = ['','','','']
var serializeMail = ['julien.laville@hotmail.fr']

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juliancito75@gmail.com',
    pass: ''
  }
});

fs.readFile("./attachment.txt", function (err, data) {
  for (var i = 0; i < serializeMail.length; i++){
      var mailOptions = {
        from: 'juliancito75@gmail.com',
        to: serializeMail[i],
        subject: 'Sending Email using Node.js',
        html: '<h1>Welcome</h1><p>That was easy!</p>',
        attachments: [{'filename': 'attachment.txt', 'content': data}]
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 
  }
});

/*
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
} 

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
} 
*/