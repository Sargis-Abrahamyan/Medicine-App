import { useEffect, useState } from 'react';

import styles from './watch.module.css';

const Watch = () => {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);
    return (
        <>
            {time !== null && (
                <div className={styles.watch_block}>
                    <h3 className={styles.time}>{time}</h3>
                </div>
            )}
        </>
    );
};

export default Watch;
