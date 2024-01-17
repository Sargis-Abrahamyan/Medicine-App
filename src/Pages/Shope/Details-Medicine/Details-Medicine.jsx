import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Card } from '../../../Components/Card/Card';
import styles from './DetailsMedicine.module.css';

const DetailsMedicine = () => {
    const { id } = useParams();
    const { medicineData } = useSelector((state) => state.medicine);
    const detailsItem = medicineData.find((item) => item.id === id);
    const { description, company } = detailsItem;

    return (
        <div className={styles.selectedMedicine_container}>
            <Card title={id} height={'100%'} padding={'20px'}>
                <div className={styles.center_block}>
                    <p className={styles.selectedMedicine_company}>Company : {company}</p>
                    <p className={styles.selectedMedicine_description}>{description}</p>
                </div>
            </Card>
        </div>
    );
};

export default DetailsMedicine;
