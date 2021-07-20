const connectedKnex = require('./knex-connector');

function getAllEmployees() {
    return connectedKnex('employee').select('*');
}

function getEmployeById(id) {
    return connectedKnex('employee').select('*').where('id', id).first();
}

function addEmployee(emp) {
    return connectedKnex("employee").insert(emp);
}

function updateEmployee(emp, id) {
    return connectedKnex("employee").where('id', id).update(emp);
}

function deleteEmployee(id) {
    return connectedKnex("employee").where('id', id).del()
}

module.exports = {
    getEmployeById,
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
}


