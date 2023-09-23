import jwt from 'jsonwebtoken'


export const loginController = (req, res) => {
    const { email, password } = req.body

    const user = {
        name: 'test',
        email: 'test@gmail.com',
        role: 'user',
    }
    const token = jwt.sign(user,'secret')

    res.json({...user, token})
}