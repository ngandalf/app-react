import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  // return render html
  return (
    <div>
      <p>name</p> : {props.name}
      <p>price</p> : {props.price}
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
