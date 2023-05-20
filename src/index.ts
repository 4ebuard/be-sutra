import express, {Request, Response} from 'express'

const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  let helloMessage = 'I can deploy!!!'
    res.send(helloMessage)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})