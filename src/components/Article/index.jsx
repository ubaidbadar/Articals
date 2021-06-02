import styles from './styles.module.scss';


const Artical = props => (
    <div className={styles.root}>
        <p className={styles.upvotes}>{props.upvotes}</p>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.publish_date}>{props.date}</p>
    </div>
)

export default Artical;