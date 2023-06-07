import React, { useState, useEffect } from 'react';
import pro from './Products.module.css';
import { add, addItem } from '../../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProducts } from '../../Redux/ProductsSlice';
import { setStatus } from '../../Redux/ProductsSlice';

function Products() {
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setsort] = useState('default');

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleAdd(product) {
    dispatch(addItem(product));
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setsort(event.target.value);
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return (
      <img
        src="https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/200w.webp?cid=ecf05e474own80jqpt7dtup401jsg8tnwadbuxhelx5zpjv3&ep=v1_gifs_search&rid=200w.webp&ct=g"
        alt=""
      />
    );
  }

  // ...

let filteredProducts = [...products]; 

if (selectedCategory !== 'all') {
  filteredProducts = filteredProducts.filter(
    (product) => product.category === selectedCategory
  );
}

if (search !== '') {
  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
}

if (sort === 'low-to-high') {
  filteredProducts.sort((a, b) => a.price - b.price);
} else if (sort === 'high-to-low') {
  filteredProducts.sort((a, b) => b.price - a.price);
}



  return (
    <div className={pro.main}>
      <div className={pro.select}>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Ornaments</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <div className={pro.search}>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search product"
          />
        </div>
        <div className={pro.sort}>
          <select value={sort} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className={pro.products}>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <div className={pro.box}>
              <div className={pro.img}>
                <img src={product.image} alt="product" />
              </div>
              <div className={pro.details}>
                <h4>{product.title}</h4>
                <h4>${product.price}</h4>
                <div className={pro.btn}>
                  <button
                    className={pro.add}
                    onClick={() => handleAdd(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
