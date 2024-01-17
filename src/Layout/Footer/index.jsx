import { footerText } from '../../Constants/constatns';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <span className={styles.footer_info}>{footerText} </span>
        </footer>
    );
};

export default Footer;
