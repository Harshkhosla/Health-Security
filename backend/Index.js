const ConnectToMongo = require('./db');
const express = require('express')
const cors = require('cors');

ConnectToMongo();

const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

app.use(express.json())
app.use(
  express.urlencoded({extended:true})
)

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/health',require('./routes/healthId'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})