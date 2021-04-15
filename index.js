const app = require('express')()
const db = require('./config/db')
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.get('/', (req, res) => {

    res.send("Hello World")
})


app.get('/users', (req, res) => {
    db.query('SELECT * from users', (err, resultat) => {
        if (err)
            res.json({ message: "Une erreur s'est produite", err: err })

        res.json(resultat)
    })
})

app.get('/users/:id', (req, res) => {
    db.query(`SELECT * from users where id=${req.params.id}`, (err, resultat) => {
        if (err)
            throw err;

        res.json(resultat)
    })
})



app.post('/users', (req, res) => {
    const { nom, email, password } = req.body

    db.query(`INSERT INTO users (email,password,nom) VALUES ('${email}', '${password}', '${nom}')`, (err, resultat) => {
        if (err)
            throw err
        res.json({
            message: "Utilisateur créer avec succées"
        })
    })
})

app.put('/users/:id', (req, res) => {
    db.query(`select * from users where id= ${req.params.id} `, (err, users) => {
        if (err)
            throw err

        var userUpdated = { ...users[0], ...req.body }
        db.query(`UPDATE user SET nom='${userUpdated.nom}' , email='${userUpdated.email}', password='${userUpdated.password}' where id=${req.params.id} `)
    })
})


// I - Creation de la connection
// II - Creation des routes pour le crud
// III - Création des réquêtes sql pour le crud 




app.listen(3000, () => {
    console.log("Server is running on port 3000")
})