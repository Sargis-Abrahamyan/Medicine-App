import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { buttonseeMoreText,priceText,quantityText } from '../../Constants/constatns';
import SearchBar from './SearchBar/Search-Bar';
import { Card } from '../../Components/Card/Card';
import Button from '../../Components/Button/Button';
import styles from './shop.module.css';

const Shop = () => {
    const { medicineData, medicineDataFilter } = useSelector((state) => state.medicine);

    const showMedicineData = useMemo(() => {
        if (medicineDataFilter.length) return medicineDataFilter;
        return medicineData;
    }, [medicineData, medicineDataFilter]);

    return (
        <div className={styles.shop_container}>
            <div className={styles.searchBar_wrapper}>
                <SearchBar />
            </div>
            <div className={styles.card_wrapper}>
                {showMedicineData.length && (
                    showMedicineData.map(({ id, name, quantity, price }) => (
                        <Card key={id} title={name}>
                            <div className={styles.card_left_block}>
                                <p className={styles.card_price}>{`${priceText} : ${price}`}</p>
                                <p className={styles.card_country}>{`${quantityText} : ${quantity}`}</p>
                            </div>
                            <Link to={`/shop/medicine/${id}`}>
                                <Button children={buttonseeMoreText} bgColor={'rgb(21,151,251)'} />
                            </Link>
                        </Card>
                    ))
                ) }
            </div>
        </div>
    );
};

export default Shop;
