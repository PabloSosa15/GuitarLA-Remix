
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { useState } from 'react'
import {getGuitar} from '~/models/guitars.server'
import styles from '~/styles/guitars.css'

export async function loader({ params }) {
  const { url } = params
  
  const guitar = await getGuitar(url)
  
  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitar not found'
    })
  }

  return  guitar  
}

export function meta({ data }) {
  
  if (!data) {
    return [
      { charset: "utf-8" },
      { title: `Guitar not found` },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}
  

    return [
        { charset: "utf-8" },
        { title: `GuitarLA - ${data.data[0].attributes.name}` },
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
  



export default function Guitar() {

  const {addCart} = useOutletContext()
  const [cant, setCant] = useState(0)
  const guitar = useLoaderData()
  const { name, description, image, price } = guitar.data[0].attributes
  


  const handleSubmit = e => {
    e.preventDefault()

    if (cant < 1) {
      alert('You must select a quantity')
      return
    }

    const guitarSelected = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      cant
    }

    addCart(guitarSelected)

    
  }
  return (
      <main className='container guitar'>
          <img className='image' src={image.data.attributes.url} alt={`image of guitar ${name}`} />

          <div className='content'>
              <h3>{name}</h3>
              <p className="text">{description[0].children[0].text}</p>
        <p className='price'>${price}</p>
        
        <form onSubmit={handleSubmit} className='formulary'>
          
          <label htmlFor='cant'> Cant</label>

          <select 
            onChange={e => setCant(parseInt(+e.target.value))} 
            
            id='cant'>
            <option value='0'> -- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            value="Add to cart"
          />
        </form>
          </div>
    </main>
  )
}
