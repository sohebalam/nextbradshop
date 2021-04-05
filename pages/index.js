import { Container, Grid } from "@material-ui/core"
import ProductCard from "../components/ProductCard"
import baseUrl from "../utils/baseUrl"
// import products from "../products"

export default function Home({ products }) {
  return (
    <>
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
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/products/productRoute`)
  const data = await res.json()
  return {
    props: {
      products: data,
    },
  }
}
