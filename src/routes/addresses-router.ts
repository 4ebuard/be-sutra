import { Request, Response, Router } from "express"

const addresses = [{id: 111, value: 'Lenina 5'}, {id: 112, value: 'panina 10'}] 

export const addressesRouter = Router()

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
  })
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find(p => p.id === +req.params.id)
    if (address) {
      res.send(address)
    }
    else {
      res.send(404)
    }
 })
