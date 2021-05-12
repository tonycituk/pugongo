var express = require('express');
var Joi = require('joi')
var router = express.Router();
const monk = require('monk')

// Connection to mongoDB
const url = 'monguser:mongopass@localhost:27017/pugongo';
const db = monk(url);
//Collections

const testLogs = db.get('testLogs')
const pugongos = db.get('pugongos')

//JOI Schemas
const pugongoSchema = Joi.object({
    message: Joi.string().
        required().
        min(1)
        .max(50),
});
/* 
router.get('/testlogs', async function (req, res, next) {
    res.json(await testLogs.find());
}); */

//Read All
router.get('/pugongos', async function (req, res, next) {
    try {
        res.json(await pugongos.find());
    } catch (error) {
        next(error)
    }
});
//Read One
router.get('/pugongos/:_id', async function (req, res, next) {
    try {
        const { _id } = req.params
        const pugongo = await pugongos.findOne({
            _id
        })
        if (!pugongo) return next();
        res.json(pugongo);
    } catch (error) {
        next(error)
    }
});
//Create One
router.post('/pugongos', async function (req, res, next) {
    try {
        //console.log(req.body)
        const pugongo = await pugongoSchema.validateAsync(req.body)
        const insertedPugongo = await pugongos.insert(pugongo)
        res.json(insertedPugongo);
    } catch (error) {
        next(error)
    }
});
//Update One
router.put('/pugongos/:_id', async function (req, res, next) {
    try {
        //console.log(req.body)
        const { _id } = req.params
        const pugongo = await pugongos.findOne({
            _id
        })
        if (!pugongo) return next();
        const changedPugongo = await pugongoSchema.validateAsync(req.body)
        await pugongos.update({
            _id
        }, {
            $set: changedPugongo
        })
        res.json(changedPugongo);

    } catch (error) {
        next(error)
    }
});
//Delete One
router.delete('/pugongos/:_id', async function (req, res, next) {
    try {
        const { _id } = req.params
        const pugongo = await pugongos.remove({
            _id
        })
        res.json({message: "succes"});
    } catch (error) {
        next(error)
    }
});

//

module.exports = router;
