// Importer la librairie
var mysql = require('mysql');

// Créer une connection à la bdd
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'nodelearning'
});

// Se connecter à la bdd
connection.connect((err) => {
    if(err)
        console.log("Une erreur s'est produite")
    
    console.log("La connection est établie")
});

module.exports = connection




