const mongoose = require('mongoose')

mongoose
    .connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x: { connections: { name: any }[] }) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err: any) => console.error('Error connecting to mongo', err))

module.exports = mongoose