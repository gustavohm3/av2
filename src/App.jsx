import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import * as api from './api/products';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const res = await api.getProducts();
    setProdutos(res.data);
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = async (data) => {
    if (editing) {
      await api.updateProduct(editing.id, data);
      setEditing(null);
    } else {
      await api.createProduct(data);
    }
    load();
  };

  const handleEdit = (prod) => {
    setEditing(prod);
  };

  const handleDelete = async (id) => {
    await api.deleteProduct(id);
    load();
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
        Cadastro de Produtos
      </Typography>
      <ProductForm initialData={editing} onSubmit={handleSubmit} />
      <ProductList products={produtos} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
}

export default App;
