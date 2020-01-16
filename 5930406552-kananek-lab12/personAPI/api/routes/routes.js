'use strict';
module.exports = function(app){
    var todoList = require('../controllers/controller');

    app.route('/persons')
        .get(todoList.list_all_persons)
        .post(todoList.create_a_person);

    app.route('/persons/:personId')
    .get(todoList.read_a_person)
    .put(todoList.update_a_person)
    .delete(todoList.delete_a_person);
};