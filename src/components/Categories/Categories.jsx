import styles from './styles.module.css';
const Categories = ({categories, setSelectedCategories, selectedCategories}) => {
    return (
        <div className={styles.categories}>
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
};

export default Categories;