import Link from 'next/link'
import React from 'react'

type Category = {
  name: string
  slug: string
}
const categories: Category[] = [
  { name: 'react', slug: 'react' },
  { name: 'tailwind', slug: 'tailwind' },
  { name: 'nextjs', slug: 'nextjs' },
  { name: 'typescript', slug: 'typescript' },
]
const Header: React.FC = (props) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="text cursor-pointer text-4xl font-bold text-white">
              GraphCMS
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Header
