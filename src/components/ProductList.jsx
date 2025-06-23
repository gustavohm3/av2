import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <List>
      {products.map(p => (
        <ListItem key={p.id} secondaryAction={
          <>
            <IconButton edge="end" onClick={() => onEdit(p)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" onClick={() => onDelete(p.id)}>
              <Delete />
            </IconButton>
          </>
        }>
          <ListItemText primary={p.nome} secondary={`R$ ${p.preco}`} />
        </ListItem>
      ))}
    </List>
  );
}
