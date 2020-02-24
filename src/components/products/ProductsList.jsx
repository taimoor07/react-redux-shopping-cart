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
      products: []
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

  render() {
    return (
      <Container fixed>
        <Box component="div" style={styles.productsList}>
          <Product products={this.state.products}></Product>
        </Box>
      </Container>
    );
  }
}

export default ProductsList;
