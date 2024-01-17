import { buttonSaveText } from '../../Constants/constatns';
import { companyItem } from '../../Mock_Data/companyItem';
import { useNewMedicine } from './useNewMedicine';
import Button from '../../Components/Button/Button';
import styles from './newMedicine.module.css';

const NewMedicine = () => {
    const { formData, errors, handelSubmit, handelChangeInput } = useNewMedicine();
    const { name, price, quantity, description, company } = formData;

    return (
        <form className={styles.custom_input} onSubmit={handelSubmit}>
            <div className={styles.input_group}>
                <p className={styles.errors_message}>{errors.name && errors.name}</p>
                <input
                    type='text'
                    name='name'
                    placeholder='Write Your Name'
                    value={name}
                    onChange={handelChangeInput}
                />
            </div>

            <div className={styles.input_group}>
                <p className={styles.errors_message}>{errors.price && errors.price}</p>
                <input
                    type='number'
                    name='price'
                    placeholder='Write Price'
                    value={price}
                    onChange={handelChangeInput}
                />
            </div>

            <div className={styles.input_group}>
                <p className={styles.errors_message}>{errors.quantity && errors.quantity}</p>
                <input
                    type='number'
                    name='quantity'
                    placeholder='Write Quantity'
                    value={quantity}
                    onChange={handelChangeInput}
                />
            </div>
            <div className={styles.input_group}>
                <p className={styles.errors_message}>{errors.description && errors.description}</p>
                <textarea
                    type='text'
                    name='description'
                    placeholder='Write Description'
                    value={description}
                    onChange={handelChangeInput}
                />
            </div>

            <div className={styles.input_group}>
                <p className={styles.errors_message}>{errors.company && errors.company}</p>
                <select name='company' value={company} onChange={handelChangeInput}>
                    {companyItem.map(({ id, name }) => (
                        <option key={id} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            <Button children={buttonSaveText}bgColor={'red'} />
        </form>
    );
};

export default NewMedicine;
