import express, { NextFunction, Request, Response } from 'express'

const app = express()


// Routes banana hai yahan pe

app.get("/", (req:Request, res:Response, next:NextFunction) =>{
    res.json({message: 'Welcome to sheryians'})
})

app.get("/courses", (req:Request, res:Response, next:NextFunction) =>{
    res.json({message: 'Courses page'})
})


export default app
