/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// init api rest
import express from 'express'
import hotelsRouter from './routes/hotels.router'
import 'dotenv/config'

const app = express()
app.use(express.json())// middleware transform  tojson

const port: string = process.env.PORT || '3001'

// get api ping
app.get('/', (_, res) => {
  res.send('Hello, welcome api ping aviatur')
})

// create routes api for hotels
app.use('/api/hotels', hotelsRouter)

// start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`)
})
