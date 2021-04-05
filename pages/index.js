import { Container, Grid } from "@material-ui/core"
import ProductCard from "../components/ProductCard"
import products from "../products"

export default function Home() {
  return (
    <Container>
      <h1>Latest Courses</h1>
      <Grid>
        <Grid container spacing={2} direction="row">
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}
