import { forwardRef } from 'react';
import styles from './styles.module.css';
const Categories = forwardRef(
    ({categories, setSelectedCategories, selectedCategories}, ref) => {
    return (
        <div ref={ref} className={styles.categories}>
            <button 
                onClick={() => setSelectedCategories(null)}
                className={!selectedCategories ? styles.active : styles.item}
            >
                All
            </button>
            {categories.map((categories) => {
                return (
                    <button 
                    onClick={() => setSelectedCategories(categories)}
                    className={
                        selectedCategories === categories ? styles.active : styles.item
                    }
                    key={categories}
                    >
                        {categories}
                    </button>
                );
            })}
        </div>
    );
  }
);

Categories.displayName = 'Categories'

export default Categories;