const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
//Create API End Points (HTTP Request,Response)
app.get('/',(req,res)=>{
res.send('URK22CS2045')
})
//config PORT and Start Server
const PORT = 8000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})