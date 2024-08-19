import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const DetailsProduct = () => {
  const { id } = useParams();
  const [data] = useFetch('https://fakestoreapi.com/products');
  const product = data.find((item) => item.id === parseInt(id));
  console.log(product);

  

  return (
    <div style={{ padding: '20px' }}>
      {product ? (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <img src={product.image} alt={product.title} width={300} height={300} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default DetailsProduct;
