import express from 'express'
import routes from './routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000

app.use(cookieParser())
app.use(express.json())
app.use(cors())
// routes
app.use(routes)


app.listen(port, () => {
    console.log("listening");
})