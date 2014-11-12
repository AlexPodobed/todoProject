var express = require('express');
var router = express.Router();
var Todo = require('../model/todo');

router.get('/', function(req, res){
   Todo.find(function(err, todos){
       if(err) res.send(err)

       res.json(todos);
   });
});

router.post('/', function(req, res){
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err){
        if(err) res.send(err);

        Todo.find(function(err, todos){
            if(err) res.send(err);

            res.json(todos);
        });
    });
});

module.exports = router;

