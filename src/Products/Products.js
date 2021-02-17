import React, {Component} from 'react';
import { ProductData } from './ProductData';
import { Link } from 'react-router-dom'
import './Products.css'

class Products extends Component {

    render(){
        const productList = ProductData.map(product => {
            return(<li className="product-category" key={product.id}>
                <div className="text-container">
                <Link to={`/product/${product.id}`}>
                <img className="product-thumbnails" src={product.thumbnail} alt={product.title} />
                </Link>
                <Link to={`/product/${product.id}`}>
                <div className="centered-text">{product.title}</div>
                </Link>
                </div>
            </li>)
        })
        return(
            <div className="product-page">
                <ul className="product-list">
                   {productList}
                </ul>

            </div>
        )
    }
}

export default Products;