import React, {Component} from 'react';
import { ProductData } from './ProductData';
import { Link } from 'react-router-dom'

class Products extends Component {

    render(){
        const productList = ProductData.map(product => {
            return(<li key={product.id}>
                <Link to={`/product/${product.id}`}>
                    {product.title}
                </Link>
            </li>)
        })
        return(
            <div>
                <ul className="product-list">
                   {productList}
                </ul>

            </div>
        )
    }
}

export default Products;