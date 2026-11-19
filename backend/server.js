import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser' 
import authRoutes from './routes/auth.js'



const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}))


app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

