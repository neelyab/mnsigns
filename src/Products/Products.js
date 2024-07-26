import React, { Component } from "react";
import { ProductData } from "./ProductData";
import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet";

class Products extends Component {
  render() {
    const productList = ProductData.map((product) => {
      return (
        <li className="product-category" key={product.id}>
          <div className="text-container">
            <Link to={`/product/${product.id}`}>
              <img
                className="product-thumbnails"
                src={product.thumbnail}
                alt={product.title}
              />
            </Link>
            <Link to={`/product/${product.id}`}>
              <div className="centered-text">
                <span>{product.title}</span>
              </div>
            </Link>
          </div>
        </li>
      );
    });
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Signs, Products, and Services | Mikes Signs 4 Less | Fredericksburg
            VA
          </title>
          <meta
            name="description"
            content="Mikes Signs 4 Less offers a variety of products and services in Fredericksburg, VA including vehicle wraps, yard signs, buidling signs, monument signs, t shirt printing and other custom apparel."
          />
        </Helmet>
        <div className="product-page">
          <h1>Products and Services </h1>
          <ul className="product-list">{productList}</ul>
        </div>
      </div>
    );
  }
}

export default Products;
