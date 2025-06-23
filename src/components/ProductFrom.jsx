import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function ProductForm({ initialData, onSubmit }) {
  const [produto, setProduto] = useState(initialData || { nome: '', preco: 0 });

  useEffect(() => {
    if (initialData) setProduto(initialData);
  }, [initialData]);

  const handleChange = e => setProduto(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(produto);
    setProduto({ nome: '', preco: 0 });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Nome"
        name="nome"
        value={produto.nome}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 1 }}
      />
      <TextField
        label="Preço"
        name="preco"
        type="number"
        value={produto.preco}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 1 }}
      />
      <Button type="submit" variant="contained">
        {initialData ? 'Atualizar' : 'Cadastrar'}
      </Button>
    </Box>
  );
}
