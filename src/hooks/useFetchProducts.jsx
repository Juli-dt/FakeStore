import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchProducts = () => {
    const [ products, setProducts] = useState([])
    const [ error, setError] = useState(null)
    const [ isLoading, setIsLoading] = useState(true)
    
    useEffect( () => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setProducts(response.data)
                setIsLoading(false)
                console.log(products)
            } catch (error) {
                setError('Algo malió sal')
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchProducts()
    }, [])
    return { products, error, isLoading}
}


export default useFetchProducts