import ProductList from "@/components/shared/product/product-list"
// import sampleData from "@/db/sample-data"

import { getLatestProducts } from "@/lib/actions/product.actions"

const Homepage = async () => {
  // console.log(sampleData.products)
  const latestProducts = await getLatestProducts()
  return (
    <>
      {/* 🌿Home */}
      <ProductList title='New arrival' data={latestProducts} limit={4} />
      {/* <ProductList title='New arrival' data={latestProducts} limit={4} /> */}
    </>
  )
}

export default Homepage
