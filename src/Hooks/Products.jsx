import React, { useContext, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import { MyContext } from './UseContext';
import './Products.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { search, handleChange, filterData } = useContext(MyContext);
  const [current, setCurrent] = useState(1);

  const navigate = useNavigate();

  const itemPerPage = 6;
  

  const countPage = Math.ceil(filterData.length / itemPerPage);

  const handlePageChange = (e, value) => {
    setCurrent(value);
  };

  const lastData = current * itemPerPage;
  const firstData = lastData - itemPerPage;

  const currentPagination = filterData.slice(firstData, lastData);


  const details = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        value={search}
        placeholder="Search products..."
      />
    <div className="product-list">
      {currentPagination.map((product) => (
        <ul className="product-item" key={product.id}>
          <li>
            <img onClick={() => details(product.id)}  src={product.image} alt={product.title} width={200} height={200} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        </ul>
      ))}
    </div>



      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination  
          count={countPage} 
          page={current} 
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
      </Box>

    </>

);
};

export default Products;
