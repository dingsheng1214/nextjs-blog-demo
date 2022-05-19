import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'
import { Post } from '../types/Post'

type HomeProp = {
  posts: Post[]
}
const Home: NextPage<HomeProp> = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>cms blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  const result = posts.map((post) => post.node)
  return {
    props: {
      posts: result,
    },
  }
}
