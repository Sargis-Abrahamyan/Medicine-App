import { buttonSearchText } from '../../../Constants/constatns';
import { useSearchBar } from './useSearchBar';
import Button from '../../../Components/Button/Button';
import styles from './searchBar.module.css';

const SearchBar = () => {
    const { handelSubmit, searchTerm, handelSearchChange } = useSearchBar();

    return (
        <div className={styles.searchBar_container}>
            <form className={styles.custom_input} onSubmit={handelSubmit}>
                <input
                    className={styles.search_input}
                    name='search'
                    type='text'
                    placeholder='Search Product...'
                    value={searchTerm}
                    onChange={handelSearchChange}
                />
                <Button children={buttonSearchText} bgColor={'rgb(21,151,251)'} />
            </form>
        </div>
    );
};

export default SearchBar;
