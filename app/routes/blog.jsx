import { useLoaderData } from "@remix-run/react"
import  ListPosts from '~/components/list-post.jsx'
import { getPosts } from "~/models/post.server"
import styles from "~/styles/blog.css"

export function meta() {
  return [
    { charset: "utf-8" },
    { title: `GuitarLA - Our Blog` },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
];
}


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()

  return posts.data
}
function Blog() {
  const posts = useLoaderData()

  return (
    <main className="container">
      <h2 className="heading">Blog</h2>
      <div>
        <ListPosts
        posts = {posts}
        />
      </div>
    </main>
  )
}

export default Blog
