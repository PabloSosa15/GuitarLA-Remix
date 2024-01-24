import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/us.css'


export function meta() {
  return [
      { charset: "utf-8" },
      { title: "GuitarLA - About Us" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}
function Us() {


  return (
    <main className="container us">
      <h2 className="heading"> Us</h2>

      <div className="content">
        <img src={image} alt="us" />

        <div> 
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lorem nisi. Mauris faucibus enim sit amet condimentum fringilla. Nam id nunc posuere, elementum lacus a, blandit nisl. Aliquam fringilla quam eget congue egestas. Sed ut vulputate dui, nec posuere odio.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lorem nisi. Mauris faucibus enim sit amet condimentum fringilla. Nam id nunc posuere, elementum lacus a, blandit nisl. Aliquam fringilla quam eget congue egestas. Sed ut vulputate dui, nec posuere odio.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Us
