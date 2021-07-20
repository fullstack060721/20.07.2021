const express = require('express')
const sqlite3 = require('sqlite3')
const path = require('path')
const knex = require('knex')

const port = 8080

const app = express()

// knex connector
const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "company.db"
    }
})

// to server static pages
app.use(express.static(path.join(__dirname, '/')))

// for POST json 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/employee', async(req, res) => {
    const employees = await connectedKnex('employee').select('*')
    res.status(200).json({ employees })
});

app.post('/employee', async (req, res) => {
    try
    {
        
    }
}

app.listen(port, () => console.log(`Listening to port ${port}`))
