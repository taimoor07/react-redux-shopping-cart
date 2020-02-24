import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import * as ProductsAPI from "../../api/products";
// import PropTypes from "prop-types";

const styles = {
  productsList: {
    textAlign: "center"
  },
  productImage: {
    width: "100%",
    height: "20rem"
  },
  productTitle: {
    productName: {
      fontSize: "2rem",
      margin: 0,
      fontWeight: "normal"
    },
    productPrice: {
      fontSize: "2rem",
      marginTop: "5px",
      fontWeight: "normal",
      textAlign: "right"
    }
  },
  quantityOuter: {
    position: "relative",
    quantity: {
      margin: 0,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  }
};

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

  renderProducts = () => {
    let { products } = this.state;
    return (
      <Box component="span">
        {products.map(product => {
          return (
            <div key={product.id}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <img src={product.img} alt="" style={styles.productImage} />
                </Grid>
                <Grid item xs={3}>
                  <div style={styles.productTitle}>
                    <h4 style={styles.productTitle.productName}>
                      {product.name}
                    </h4>
                    <h4 style={styles.productTitle.productPrice}>
                      $ {product.price}
                    </h4>
                  </div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid style={styles.quantityOuter} item xs={3}>
                  <div style={styles.quantityOuter.quantity}>- Qty +</div>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Box>
    );
  };

  render() {
    return (
      <Container fixed>
        <h1 style={styles.productsList}>Products List</h1>
        {this.renderProducts()}
      </Container>
    );
  }
}

export default ProductsList;
