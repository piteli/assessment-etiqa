const express = require('express');
const router = express.Router();
require('../db/mongoose');
const Freelancer = require('../models/freelancers');

router.get('/freelancers', async(request, response) => {
    try{
        let freelancers = await Freelancer.find({});
        response.status(200).send(freelancers);
    } catch(error) {
        response.status(400).send(error);
    }
});

router.post('/freelancer/create', async(request, response) => {

    const body = request.body;
    const creates = Object.keys(body);
    const allowedCreates = ['username', 'email', 'phoneNumber', 'skillsets', 'hobby'];
    const isValidOperation = creates.every((create) => allowedCreates.includes(create));

    if(!isValidOperation) {
        console.log(body);
        return response.status(400).send({ error: 'Invalid creates!' });
    }

    const freelancer = new Freelancer(body);

    try{
        await freelancer.save();
        response.status(201).send(freelancer);
    } catch(error) {
        response.status(400).send(error); 
    }

});

router.put('/freelancer/update/:id', async(request, response) => {

    const body = request.body;
    const updates = Object.keys(body);
    const allowedUpdates = ['phoneNumber', 'skillsets', 'hobby'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return response.status(400).send({ error: 'Invalid updates!' });
    }

    try{
        const freelancer_id = request.params.id;
        const freelancer = await Freelancer.findByIdAndUpdate(freelancer_id, body, { new: true, runValidators: true });

        if(!freelancer) {
            return response.status(404).send();
        }
        response.status(202).send(freelancer);
    } catch(error) {
        response.status(400).send(error);
    }
});

router.delete('/freelancer/delete/:id', async(request, response) => {
    try{
        const freelancer_id = request.params.id;
        const freelancer = await Freelancer.findByIdAndDelete(freelancer_id);

        if(!freelancer) {
            return response.status(404).send();
        }

        response.status(200).send(freelancer);

    } catch(error) {
        response.status(500).send();
    }
});

module.exports = router;