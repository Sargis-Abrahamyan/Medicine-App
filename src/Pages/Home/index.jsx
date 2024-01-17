import { useState, useEffect } from 'react';

import doctor from '../../Assets/image/doctor.jpg';
import { homeHelloWorldText } from '../../Constants/constatns';
import styles from './home.module.css';
import Watch from './Watch/Watch';

const Home = () => {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);


    console.log(time);
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
