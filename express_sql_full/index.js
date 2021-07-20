const express = require('express')
const path = require('path')

const emp_repo = require('./emp-repo')

const port = 8080

const app = express()

// to server static pages
app.use(express.static(path.join(__dirname, '/')))

// for POST json 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/employee', async(req, res) => {
    const employees = await emp_repo.getAllEmployees(); 
    res.status(200).json({ employees })
});

app.get('/employee/:emp_id', async(req, res) => {
    const emp_id = req.params.emp_id
    const employee = await emp_repo.getEmployeById(emp_id); 
    res.status(200).json({ employee })
});

app.delete('/employee/:emp_id', async(req, res) => {
    try
    {
        const emp_id = req.params.emp_id
        const result = await emp_repo.deleteEmployee(emp_id)
        res.status(200).json({
            res: 'success',
            url: `localhost:8080/employee/${emp.ID}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
});

app.put('/employee/:emp_id', async(req, res) => {
    try
    {
        const emp_id = req.params.emp_id
        emp = req.body
        const result = await emp_repo.updateEmployee(emp, emp_id)
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/employee/${emp.ID}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
});

app.post('/employee', async (req, res) => {
    try
    {
        emp = req.body
        const result = await emp_repo.addEmployee(emp)
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/employee/${emp.ID}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
})

app.listen(port, () => console.log(`Listening to port ${port}`));