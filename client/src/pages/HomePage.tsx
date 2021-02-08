import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios, { AxiosResponse } from 'axios'
import Product from '../components/Product'

type ProductType = {
  _id: string
  name: string
  image: string
  description: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
}

const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res: AxiosResponse<ProductType[]> = await axios.get(
        'http://localhost:5000/api/products'
      )
      const data = res.data
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
