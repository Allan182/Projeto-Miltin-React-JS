
import styles from './Error404.module.css'

function About() {

  return (

    <div className={styles.about}>

      <h1 className={styles.title}> We Help You Ever </h1>

      <p className={styles.subtitle}>
        Experiment with us and we'll give you a reason to trust and study with us.
      </p>

      <div className={styles.container}>


        <p className={styles.paragraph}>
          <h1> King School </h1>

          The prestigious King School is an exemplary institution that sets the bar high for excellence in education.
          From its state-of-the-art facilities to its dedicated faculty, this school provides an unparalleled learning environment for students.We are waiting for you, come meet us!

        </p>

        <div className={styles.containerImage}>  </div>
      </div>
    </div>

  )


}
export default About;
