import React, {Component} from 'react';
import {ProductData} from '../Products/ProductData';
import './ProductDetails.css';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
    render(){
        const productId = this.props.match.params.productId;
        const productInfo = ProductData.find(p => p.id === productId)
        const images = productInfo.images.map((image, i) =>
             {
                 return(
            <img className='product-images' key={i} src={image} alt={productInfo.title} />
                )
        })
        let list;
       if (productInfo.list ) {
           list = productInfo.list.map(item=> <li>{item}</li>) 
       } else {
           list = undefined;
       }

        return(
            <div className = "product-details">
                <div className="back"> <Link to='/products' ><p>Back to product page</p></Link></div>
                <h2>{productInfo ? productInfo.title : ''}</h2>
                <p className="product-description">{productInfo.description}</p>
                <ul className="item">{list ? list : ''}</ul>
                <div className = 'image-container'>
                {images ? images : ''}
                </div>
            </div>
        )
    }
}

export default ProductDetails;