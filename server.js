require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})

// Router
const itemRouter = require('./routes/item_route')

app.use('/api/items', itemRouter)