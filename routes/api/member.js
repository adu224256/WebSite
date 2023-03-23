const express = require('express');
const router = express.Router();
const members = require('../../data/members');
const uuid = require('uuid');

router.get('/', (req, res) => {
    res.json(members);
})

router.get('/:id', (req, res) => {
    const id  = req.params.id;
    if (member = members.filter(member => member.id === id)) {
        res.json(member);
    }else{
        res.status(400).json({message: `Member not found ${id}`});
    }
})

router.get('/status/:status', (req, res)=>{
    members.forEach(member => {
        member.status = req.params.status;
    })
    res.json({msg: `Success change all-members' status '${req.params.status}'` });
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


router.put('/:id', (req, res) => {
    const id  = req.params.id;
    const member = members.find(member => member.id === id);
    if(!member){
        res.status(400).json({message: `Member not found ${id}`});
    }else{
        members.forEach((member) => {
            member.name = req.body.name || member.name;
            member.email = req.body.email || member.email;
        }
        );
        res.json({msg: `member ${id} updated successfully.`})
    }
});

router.delete('/:id', (req, res) => {
    const id = members.findIndex(member => member.id === req.params.id)
    if(id==-1){
        res.status(400).json({message: `Member not found ${req.params.id}`});
    }else{
        members.splice(id, 1);
        res.json({msg: `member ${req.params.id} delete successfully.`})
    }
})

module.exports = router;
