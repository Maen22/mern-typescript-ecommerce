import express, { Request, Response } from 'express'
import products from './data/products'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (_, res: Response) => {
  res.send('API is running...')
})
app.get('/api/products', (_, res: Response) => {
  res.json(products)
})
app.get('/api/products/:id', (req: Request, res: Response) => {
  let id = req.params.id
  let product = products.find((p) => p._id === id)
  res.json(product)
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
