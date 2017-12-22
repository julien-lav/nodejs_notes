let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')
let app = express()

// Moteur de template
app.set('view engine', 'ejs') //pour lire les fichier .ejs


// Middleware
app.use('/assets', express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
/*
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(request.body, null, 2))
})
*/
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
  // false pour le moment car pas en https
})) 
// Dans cette ordre car on veut que le session soit éxécuté avant le middleware
app.use(require('./middlewares/flash'))



// Routes
app.get('/', (request, response) => {
	process.env.NODE_ENV
	//if (request.session.error) {
	//	response.locals.error = request.session.error
	//	request.session.error = undefined 
	//}
	let Message = require('./models/message') 
	Message.all(function (messages){
	response.render('pages/index', {messages: messages})
	})
	//response.senrsd('salutation')
})
app.get('message/:id', (request, response) => {
	response.send(request.params.id)

	let Message = require('./models/message') 
	response.find(request.params.id, function(message) {
		response.render('message/show')
	})


})
app.post('/', (request, response) => {
	console.log(request.body)
	if (request.body.message === undefined || request.body.message === '') {
	//response.render('pages/index', {error: 'Vous n\'avez pas entré de message'})
	request.flash('error',"Vous n'avez pas posté de message")
	response.redirect('/')
	} else {
		let Message = require('./models/message')
		Message.create(request.body.message, function () {
		request.flash('success', 'Merci !')
		response.redirect('/')
		})	
	}
	

})



app.listen(8080)

 