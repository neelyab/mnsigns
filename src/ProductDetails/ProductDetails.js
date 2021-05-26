import React, {Component} from 'react';
import {ProductData} from '../Products/ProductData';
import './ProductDetails.css';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

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
           list = productInfo.list.map((item, i)=> <li key={i}>{item}</li>) 
       } else {
           list = undefined;
       }

        return(
            <div>
             <Helmet>
                    <meta charSet="utf-8" />
                    <title>{productInfo ? productInfo.title : ''} | Mikes Signs 4 Less | Fredericksburg VA</title>
                    <meta
                    name="description"
                    content= {"Custom " + productInfo.title + " Fredericksburg VA"}
                    />
                </Helmet>
            <div className = "product-details">
                <div className="back"> <Link to='/products' ><p>Back to product page</p></Link></div>
                <h1>{productInfo ? productInfo.title : ''}</h1>
                <p className="product-description">{productInfo.description}</p>
                <ul className="item">{list ? list : ''}</ul>
                <div className = 'image-container'>
                {images ? images : ''}
                </div>
            </div>
            </div>
        )
    }
}

export default ProductDetails;