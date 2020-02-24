import React from "react";
import { Grid, Box, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
// import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from "@material-ui/core";

const styles = {
  productImage: {
    width: "100%",
    height: "17rem"
  },
  productsList: {},
  root: {
    maxWidth: 345
  },
  productPrice: {
    fontSize: "18px",
    fontWeight: "700"
  },
  productName: {
    color: "gray"
  },
  cardActions: { paddingTop: 0 },
  cartButton: { width: "100%", color: "#568203", border: "2px solid #568203" }
};

function Product(props) {
  return (
    <Container fixed>
      <Box component="div" style={styles.productsList}>
        <Grid container spacing={3}>
          {props.products.map(product => {
            return (
              <Grid item key={product.id} xs={3}>
                <Card style={styles.root}>
                  <CardMedia style={styles.media}>
                    <img src={product.img} alt="" style={styles.productImage} />
                  </CardMedia>
                  <CardContent>
                    <Typography style={styles.productPrice} component="h1">
                      ${product.price}
                    </Typography>
                    <Typography style={styles.productName} component="p">
                      {product.name}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing style={styles.cardActions}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={styles.cartButton}
                    >
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default Product;
