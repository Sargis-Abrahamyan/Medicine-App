import styles from './card.module.css';

export  const Card = ({ title, width, height, padding, children }) => {
    const cardStyles = {
        width,
        height,
        padding
    };
    return (
        <div className={styles.card} style={cardStyles}>
            <div className={styles.card_header}>
                <h2 className={styles.card_title}>{title}</h2>
            </div>
            <div className={styles.card_content}>{children}</div>
        </div>
    );
};

 