import { z } from 'zod'
import data from '../data.json'
import { NextResponse } from 'next/server'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const products = data.products.find(products => products.slug === slug)

  if (!products) {
    return Response.json({ message: 'Products not found.' }, { status: 400 })
  }

  // const featuredProducts = data.products.filter((products) => products.featured)

  return Response.json(products)
}