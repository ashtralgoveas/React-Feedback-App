import cors from 'cors'
import express from 'express'
import {randomUUID} from 'crypto'
const app = express()

const feedbacks = []
app.use(express.json())
app.use(cors())

app.post('/save-feedback',(req,res)=> {
    const newFeedback = {
        id: randomUUID(),
        feedbackText:req.body.feedbackText
    }
    feedbacks.push(newFeedback)
    res.json(newFeedback)
})

app.listen(5000, () => {
    console.log('server is running');
})