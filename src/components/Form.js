import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

 const Form = ({saveCategory}) => {
     const OPTIONS = [
         {value: 'general', label:'General'},
         {value: 'business', label:'Business'},
         {value: 'entertainment', label:'Entertainment'},
         {value: 'health', label:'Health'},
         {value: 'science', label:'Science'},
         {value: 'sports', label:'Sports'},
         {value: 'technology', label:'Technology'},
     ]


    const [category, SelectNews] = useSelect('general', OPTIONS);

    const searchCategory = e =>{
        e.preventDefault();

        saveCategory(category);
    }
    return(
        <div className={`${styles.search}  row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={searchCategory}>
                    <h2 className={styles.heading}>Search news by category</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large purple accent-4`}
                            value="search"
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form;