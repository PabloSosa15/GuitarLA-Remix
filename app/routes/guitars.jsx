import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import ListGuitars from '~/components/list-guitars';
import styles from '~/styles/guitars.css'
  
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return [
      { charset: "utf-8" },
      { title: "GuitarLA - Store" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

export async function loader() {
  const guitars = await getGuitars()

  return guitars.data
}


function Store() {
  const guitars = useLoaderData()


  return (
    <section className='store'>
      <ListGuitars
      guitars = {guitars}
      />
    </section>
    )
}

export default Store
