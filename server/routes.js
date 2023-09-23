import express from 'express'
import { loginController } from './controllers/loginController.js'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("working...")
})


router.post('/login',loginController)

export default router