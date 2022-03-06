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
            <div className="flex justify-center items-center">
                <form onSubmit={searchCategory}>
                    <h2 className={styles.heading}>Discover</h2>
                    <p className='text-slate-500 flex justify-center items-center text-center'>News from all over the world</p>
                    <SelectNews />
                    <div className="w-32 bg-slate-200 hover:bg-slate-300 text-white font-bold py-2 px-1 rounded-full">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} `}
                            value="search"
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form;