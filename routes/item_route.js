const express = require('express');
const router = express.Router();

const itemModel = require('../models/item_model')

// items route
router.get('/', (req, res) => {
    res.send(itemModel.getItem())
})

router.post('/', (req, res) => {
    let isAddItem = itemModel.addItem(req.body)
    if (isAddItem) {
        res.status(201).send({
            "message": 'Item added successfully'
        })
    } else {
        res.status(500).send({
            "message": 'All field required'
        })
    }
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    let isDeleteItem = itemModel.removeItem(id)
    if (isDeleteItem) {
        res.status(200).send({
            "message": 'Item deleted successfully'
        })
    } else {
        res.status(404).send({
            "message": 'Item id not found'
        })
    }
})

router.patch('/:id', (req, res) => {
    let id = req.params.id
    let isUpdateItem = itemModel.updateItem(req.body,id)
    if (isUpdateItem) {
        res.status(200).send({
            "message": 'Item updated successfully'
        })
    } else {
        res.status(404).send({
            "message": 'Item id not found'
        })
    }
})

module.exports = router