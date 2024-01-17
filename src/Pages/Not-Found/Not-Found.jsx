import { notFound } from '../../Constants/constatns'
import styles from './notFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFound_container}>
        <h1 className={styles.notFound_text}>{notFound}</h1> 
    </div>
  )
}

export default NotFound
