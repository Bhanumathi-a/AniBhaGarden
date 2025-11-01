"use server"

import { prisma } from "@/db/prisma"
import { convertToPlainObject } from "../utils"
import { LATEST_PRODUCT_LIMIT } from "../constants"

//get latest product

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  })

  return convertToPlainObject(data)
}

// get single product by it's slug

export async function getProductBySlug(slug: string) {
  // console.log(`from product action ${slug}`)
  return await prisma.product.findFirst({
    where: { slug: slug },
  })
}
