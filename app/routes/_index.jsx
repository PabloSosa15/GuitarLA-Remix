import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import { getPosts } from "~/models/post.server"
import {getCourse} from "~/models/course. server"
import ListGuitars from "~/components/list-guitars"
import ListPosts from "~/components/list-post"
import Course from "~/components/course"
import stylesGuitar from "~/styles/guitars.css"
import stylesPost from "~/styles/blog.css"
import stylesCourse from "~/styles/course.css"

export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitar
    },
    {
      rel: 'stylesheet',
      href: stylesPost
    },
    {
      rel: 'stylesheet',
      href: stylesCourse
    }
  ]
}

  export async function loader() {
    const [guitars, posts, course] = await Promise.all([
      getGuitars(),
      getPosts(),
      getCourse()
    ])



    return [
      guitars.data,
      posts.data,
      course.data
  
    ]
  }

  function Index() {

    const [guitars, posts, course] = useLoaderData()

    return (
      <>
        <main className="container">
         <ListGuitars
            guitars={guitars}
          /> 
        </main>

        <Course
        course={course?.attributes}
        />

        <section className="container">
        <ListPosts
        posts = {posts}
        />
        </section>
      </>
    )
  }

  export default Index
