const express = require('express');
const router = express.Router();
const members = require('../../data/members');
const uuid = require('uuid');

router.get('/', (req, res) => {
    res.json(members);
})

router.get('/:id', (req, res) => {
    const id  = parseInt(req.params.id);
    if (member = members.filter(member => member.id === id)) {
        res.json(member);
    }else{
        res.status(400).json({message: `Member not found ${id}`});;
    }
})

router.post('/', (req, res) => {
    if(!req.body.name ||!req.body.email){
        res.status(400).json({message: 'Please provide name and email'});
    }
    const member = {
        name: req.body.name,
        email: req.body.email,
        id: uuid.v4(),
        status: 'active'
    }
    members.push(member);
    res.json(member);
})


module.exports = router;