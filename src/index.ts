import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import { productsRouter } from './routes/products-router'
import { addressesRouter } from './routes/addresses-router'

//create express app

const app = express()
const port = process.env.PORT || 3000

const helloMessage = [{title: 'Hello world'}]

const parserMiddleware = bodyParser({})

app.use(parserMiddleware)

app.get('/', (req: Request, res: Response) => {
  res.send(helloMessage)
})

app.use('/products', productsRouter)

app.use('/addresses', addressesRouter)


//start app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})