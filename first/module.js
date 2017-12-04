exports.myDateTime = function () {
    return Date();
}; 
/*
Use the exports keyword to make 
properties and methods available outside the module file
*/
/*

var direBonjour = function() {

    console.log('Bonjour !');

}


var direByeBye = function() {

    console.log('Bye bye !');

}


exports.direBonjour = direBonjour;

exports.direByeBye = direByeBye;


//idem à :

exports.direBonjour = function() { ... };

*/