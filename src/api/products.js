import axios from 'axios'

const api = axios.create({
  baseURL: 'http://leoproti.com.br:8004'
})

export const getProducts = () => api.get('/produtos')
export const createProduct = (data) => api.post('/produtos', data)
export const updateProduct = (id, data) => api.put(`/produtos/${id}`, data)
export const deleteProduct = (id) => api.delete(`/produtos/${id}`)