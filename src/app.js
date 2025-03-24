const express = require("express")
const router = require('./modules/index.module')
const cors = require("cors");

const app = express()
const PORT = 5000

app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}...`)
})