import express, { NextFunction, Request, Response } from 'express'

const userRouter = express.Router()

userRouter.post('/register', (req: Request, res: Response, next: NextFunction) => {
    console.log('Register route hit')
    res.json({
        message: "User registered"
    })
})

export default userRouter