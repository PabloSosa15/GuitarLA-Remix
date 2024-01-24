import { Link } from "@remix-run/react"
export default function Guitar({ guitar }) {
    
     const { description , image, price, url, name } = guitar

    
  return (
      <div className="guitar">
          <img src={image.data.attributes.formats.medium.url} alt={`image guitar ${name}`} />

          <div className="content">
              <h3>{name}</h3>
              <p className="description">{description[0].children[0].text}</p>
              <p className="price">${price}</p>

              <Link className="urls" to={`/guitars/${url}`}>View Product</Link>
          </div>
    </div>
  )
}
