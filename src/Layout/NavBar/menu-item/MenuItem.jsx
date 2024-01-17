import { Link } from 'react-router-dom';

import styles from '../menu-item/menuItem.module.css';

const MenuItem = ({ name, path }) => {
    return (
        <li className={styles.menu_item}>
            <Link to={`${path}`} className={styles.link_item}>
                {name}
            </Link>
        </li>
    );
};

export default MenuItem;
