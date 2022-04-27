const fs = require('fs')
const {
    v4: uuidv4
} = require('uuid');
/**
 * 
 * @param {*} filename 
 * @returns 
 */
let readFile = (filename) => JSON.parse(fs.readFileSync(filename))
/**
 * 
 * @param {*} filename 
 * @param {*} data 
 * @returns 
 */
let writeFile = (filename, data) => fs.writeFileSync(filename, JSON.stringify(data))


/**
 * 
 * @param {*} item 
 * @returns 
 */
let addItem = (item) => {
    let items = readFile('./data/items_data.json')
    let status = false
    if (item.name !== undefined && item.price !== undefined) {
        let newItem = {
            'id': uuidv4(),
            'name': item.name,
            'price': item.price
        }
        console.log(item)
        items.push(newItem)
        writeFile('./data/items_data.json', items)
        status = true
    }
    return status

}

let removeItem = (id) => {
    let items = readFile('./data/items_data.json')
    let status = false
    let index = items.findIndex(item => item.id === id)
    if (index !== -1) {
        items.splice(index, 1)
        status = true
    }
    writeFile('./data/items_data.json', items)
    return status
}

let updateItem = (item, id) => {
    let items = readFile('./data/items_data.json')
    let index = items.findIndex(item => item.id === id)
    let status = false
    if (index !== -1) {
        let newItem = items[index]
        if (item.name !== undefined) {
            newItem.name = item.name
        }
        if (item.price !== undefined) {
            newItem.price = item.price
        }
        
        status = true
    }
    writeFile('./data/items_data.json', items)
    return status
}

/**
 * 
 * @returns 
 */
let getItem = () => readFile('./data/items_data.json')


module.exports = {
    readFile,
    addItem,
    writeFile,
    removeItem,
    updateItem,
    getItem
}