import React, {Component} from 'react';
import {ProductData} from '../Products/ProductData';


class ProductDetails extends Component {
    render(){
        const productId = parseInt(this.props.match.params.productId)
        const productInfo = ProductData.find(p => p.id === productId)
        const images = productInfo.images.map(image => {return(
            <img src={image} alt={productInfo.title} />
        )
        })

        return(
            <>
            {productInfo ? productInfo.title : ''}
            {images}
            </>
        )
    }
}

export default ProductDetails;