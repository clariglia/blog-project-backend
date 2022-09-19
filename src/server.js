import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()


const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (request, response)=>{
    response.status(200).json({'message': 'CIAO NON LO SO'})
})

app.post('/api/comments', (request, response)=>{
    const message = request.body
    prisma.comments.create({ data : message })
    .then(()=>{
        response.status(201).send(`Commento inserito!`)
    }).catch((error)=>{
        response.status(500).send(`Si è verificato un errore: ${error}`)
    })
})

app.get('/api/comments', (request, response)=>{
    prisma.comments.findMany()
    .then((comments)=>{
        response.status(200).json(comments)
    })
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server up!`)
})



