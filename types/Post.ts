import { Author } from './Author'
import { Category } from './Category'
export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  createdAt: string
  futuredImage: {
    url: string
  }

  featuredPost: boolean
  author: Author
  categories: Category[]
}
