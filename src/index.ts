import express, {Request, Response} from 'express'

//create express app

const app = express()
const port = process.env.PORT || 3000

const helloMessage = [{title: 'Hello world'}]
const products = [{title: 'tomato'}, {title: 'orange'}]
const addresses = [{value: 'Lenina 5'}, {value: 'panina 10'}] 

app.get('/', (req: Request, res: Response) => {
  res.send(helloMessage)
})
app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/products/:productTitle', (req: Request, res: Response) => {
  let product = products.find(p => p.title === req.params.productTitle)
  if (product) {
    res.send(product)
  }
  else {
    res.send(404)
  }
})

app.get('/addresses', (req: Request, res: Response) => {
  res.send(addresses)
})

//start app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})