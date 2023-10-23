import React from 'react';
import Product from "./Product";

import {useQuery } from 'react-query';

export default function ProductsPage(props) {

  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
  };

  const { data, error, isLoading } = useQuery('products', getProducts);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="page-title">Produits</div>
      <div className="container">
        <main className="grid">{
          data.map(product => {
            return (<Product   key={product.id} product= {product} handleShowNotification={()=>props.handleShowNotification()}  />)
          })
        }
        </main>
      </div>
    </div>
  );

}