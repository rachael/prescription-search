import React, { useCallback, useState } from 'react';

import './RxFilterInput.scss';

function RxFilterInput({ products, facility }) {
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState();

  const handleInput = useCallback((e) => {
    setQuery(e.target.value);
    setSelectedProduct(null);
  });

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setQuery(product.name);
  }

  const filteredProducts = products.filter(product =>
    query && product.facility === facility && product.name.toLowerCase().startsWith(query.toLowerCase()));

  return (
    <div className="RxFilter">
      <div className="RxFilterInputAddonGroup">
        <input className="RxFilterInput" type="text" name="products" onChange={handleInput} value={query} />
        <span className="RxFilterInput-Strength">
          {selectedProduct && selectedProduct.strength}
        </span>
      </div>
      <ul className="RxFilterList">
        {filteredProducts.map(product => (
          <li key={product.id} className="RxFilterListItem" onClick={() => selectProduct(product)}>
            <span className="RxFilterListItem-Name">{product.name}</span>
            <span className="RxFilterListItem-Strength">{product.strength}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RxFilterInput;
