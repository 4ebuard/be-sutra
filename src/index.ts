import express, {Request, Response} from 'express'

//create express app

const app = express()
const port = process.env.PORT || 3000

const helloMessage = [{title: 'Hello world'}]
const products = [{id: 101, title: 'tomato'}, {id: 102, title: 'orange'}]
const addresses = [{id: 111, value: 'Lenina 5'}, {id: 112, value: 'panina 10'}] 

app.get('/', (req: Request, res: Response) => {
  res.send(helloMessage)
})

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
      let searchString = req.query.title.toString()
      res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
      res.send(products) 
    }
})

app.get('/products/:id', (req: Request, res: Response) => {
  let product = products.find(p => p.id === +req.params.id)
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
app.get('/addresses/:id', (req: Request, res: Response) => {
  let address = addresses.find(p => p.id === +req.params.id)
  if (address) {
    res.send(address)
  }
  else {
    res.send(404)
  }
})
//start app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})