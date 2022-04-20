const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(express.json())

const users = [
    {id: '1', name: 'John', email: 'jhon@gmial.com'},
    {id: '2', name: 'John kaplu', email: 'jhon@gmial.com'},
    {id: '3', name: 'John maplu', email: 'jhon@gmial.com'},
    {id: '4', name: 'John jallu', email: 'jhon@gmial.com'},
    {id: '5', name: 'John pallu', email: 'jhon@gmial.com'}
]

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello node mama i am here for your sis')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log(`listening on port${port}`)
})