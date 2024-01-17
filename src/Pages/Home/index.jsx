import doctor from '../../Assets/image/doctor.jpg';
import { homeHelloWorldText } from '../../Constants/constatns';
import Watch from './Watch/Watch';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.home_container}>
            <div className={styles.content_body}>
                <h1 className={styles.home_title}>{homeHelloWorldText}</h1>
                <img src={doctor} alt='doctor' className={styles.home_image} />
            </div>
            <Watch/>
        </div>
    );
};

export default Home;
