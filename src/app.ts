import express, { NextFunction, Request, Response } from 'express'
import globalErrorHandler from './middleware/globalErrorHandler'
import userRouter from './user/userRouter'

const app = express()

// Routes banana hai yahan pe

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Welcome to sheryians' })
})

app.get("/courses", (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Courses page' })
})

app.use('/api/users',userRouter)


app.use(globalErrorHandler)



export default app
