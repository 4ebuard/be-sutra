import express, {Request, Response} from 'express'

//create express app

const app = express()
const port = process.env.PORT

const helloMessage = [{title: 'Hello world'}]
const products = [{title: 'tomato'}, {title: 'orange'}]
const addresses = [{value: 'Lenina 5'}, {value: 'panina 10'}] 

app.get('/', (req: Request, res: Response) => {
  res.send(helloMessage)
})
app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})

app.get('/addresses', (req: Request, res: Response) => {
  res.send(addresses)
})

//start app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})