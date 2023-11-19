import React, { useEffect, useState } from 'react';
import Product from './product/product';

function Products() {
  // declare variables
  const [datas, setDatas] = useState([]);

  // events
  const getData = () => {
    let infos = [
      { id: 1, name: 'name1', price: 14 },
      { id: 2, name: 'name2', price: 5 },
    ];

    setDatas(infos);
  };

  useEffect(() => {
    getData();
  }, []);

  // render
  return (
    <div>
      {datas.map((item) => (
        <Product key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default Products;
