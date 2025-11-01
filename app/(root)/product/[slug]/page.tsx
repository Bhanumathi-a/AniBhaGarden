import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProductPrice from "@/components/shared/product/product-price"

import { getProductBySlug } from "@/lib/actions/product.actions"
import { notFound } from "next/navigation"
import ProductImages from "@/components/shared/product/product-images"

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await props.params

  const product = await getProductBySlug(slug)
  if (!product) notFound()

  //   console.log(`from slug id ${product.name}`)
  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          {/* images */}
          <div className='col-span-2'>
            <ProductImages images={product.images} />
          </div>
          {/* details */}
          <div className='col-span-2 p-5'>
            <div className='flex flex-col'>
              <p>
                {product.category} from {product.brand}
              </p>
              <h3 className='h3-bold'>{product.name}</h3>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <ProductPrice
                  value={Number(product.price)}
                  className='w-24 rounded-md text-green-800 bg-green-100 px-5 py-2 items-center text-center'
                />
              </div>
            </div>

            <div className='mt-10'>
              <p className='font-semibold'> Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className='p-4'>
                <div className='mb-2 justify-between  flex'>
                  <div> Price:</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className='mb-2 justify-between  flex'>
                  <div>Status:</div>
                  <div>
                    {product.stock > 0 ? (
                      <Badge variant='outline'>In Stock</Badge>
                    ) : (
                      <Badge variant='destructive'>Out of Stock</Badge>
                    )}
                  </div>
                </div>
                {product.stock > 0 && (
                  <div className='flex-center'>
                    <Button className='w-full cursor-pointer'>
                      Add to Cart
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetailsPage
