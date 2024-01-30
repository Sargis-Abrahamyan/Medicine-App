import { route } from '../../Mock_Data/route';
import MenuItem from './menu-item/MenuItem';
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.menu_list}>
                {route.map((item)=><MenuItem key={item.id} {...item}/>)}
            </ul>
        </nav>
    );
};

export default NavBar;
