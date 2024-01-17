import styles from './button.module.css';

const Button = ({ children, width, height, color, bgColor, ...props }) => {
    const ButtonStyles = {
        width,
        height,
        color,
        backgroundColor: bgColor
    };
    return (
        <button className={styles.button} style={ButtonStyles} {...props}>
            {children}
        </button>
    );
};

export default Button;
