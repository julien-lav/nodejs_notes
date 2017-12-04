//graphikart livredor
//express.js

let app = require('express')()


app.set('view engine', 'ejs');

app.get('/', (request, response) => {

	response.render('pages/index', {test: 'Salut'})


})

//www.embeddedjs.com
//gedit ~/.bashrc

app.listen(8080)
