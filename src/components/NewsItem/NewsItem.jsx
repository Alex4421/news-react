import formatTimeAgo from "../../helpers/formatTimeAgo";
import styles from './styles.module.css';
const NewsItem = ({ item }) => {
    return (
        <li className={styles.item}>
            <div className={styles.info}>
            <div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}>

            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
            {formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}

export default NewsItem;