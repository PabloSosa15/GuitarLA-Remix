import { getPost } from "~//models/post.server";
import { useLoaderData } from "@remix-run/react";
import { formatDate } from "~/utils/helpers"
import styles from "~/styles/blog.css"

export function meta({ data }) {
  
  if (!data) {
    return [
      { charset: "utf-8" },
      { title: `Entry not found` },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}
    return [
        { charset: "utf-8" },
        { title: `GuitarLA - ${data.data[0].attributes.title}` },
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

export async function loader({ params }) {
  const { url } = params;
  const post = await getPost(url);
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entry not found'
    })
  }
  

  return post
}
export default function Post() {
  const post = useLoaderData()
  const {title, content, image, publishedAt} = post.data[0].attributes
  return (
    <article className="container post mt-3">
      <img className="image" src={image?.data?.attributes.url} alt={`image blog ${title}`} />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content[0].children[0].text}</p>
      </div>
    </article>
  

  )
}
