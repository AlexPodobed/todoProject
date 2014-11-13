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
    console.log(req.body);
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

router.delete('/:todo_id', function(req, res){
   Todo.remove({
       _id: req.params.todo_id
   }, function(err){
       if(err) res.send(err);

       Todo.find(function(err, todos){
           if(err) res.send(err);

           res.json(todos);
       });
   })
});

router.put('/:todo_id', function(req, res){
   Todo.findOneAndUpdate({
       _id: req.params.todo_id
   }, req.body, function(err, todo){
       if(err) res.send(err);
       res.json(todo);
   })


});

module.exports = router;

