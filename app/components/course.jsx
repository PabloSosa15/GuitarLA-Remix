
export default function Course({ course }) {

    const { content, image, title } = course
    
  return (
      <section className="course">
          
          <style jsx="true">{`
            .course {
            background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${image.data.attributes.url})
            `}
          </style>
          <div className="container course-grid">
              <div className="content">
                  <h2 className="heading">{title}</h2>
                  <p className="text">{content[0].children[0].text}</p>
              </div>
          </div>
    </section>
  )
}
