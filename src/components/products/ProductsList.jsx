import React, { Component } from "react";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import * as ProductsAPI from "../../api/products";
// import PropTypes from "prop-types";
import Product from "./Product";

const styles = {};

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: []
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    ProductsAPI.getProducts().then(results => {
      this.setState({ products: results.data.products });
    });
  };

  addToCart = id => {
    let { products, cart } = this.state;
    let product = products.filter(item => item.id === id);

    if (product.length !== 0) {
      if (cart.some(el => el.id === id)) {
        cart.map(el => {
          if (el.id === id) el.quantity += 1;
        });
      } else {
        product[0].quantity = 1;
        cart.push(product[0]);
      }
    }
  };

  removeFromCart = id => {
    let { cart } = this.state;
    if (cart.length !== 0) {
      if (cart.some(el => el.id === id)) {
        cart.map((el, index) => {
          if (el.id === id && el.quantity > 1) {
            el.quantity -= 1;
          } else {
            cart.splice(index, 1);
          }
        });
      }
    }
  };

  render() {
    let { products } = this.state;

    return (
      <Container fixed>
        <Box component="div" style={styles.productsList}>
          <Product
            products={products}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          ></Product>
        </Box>
      </Container>
    );
  }
}

export default ProductsList;
