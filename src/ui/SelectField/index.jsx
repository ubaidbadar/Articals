import styles from './styles.module.scss';

const SelectField = props => {
    return (
        <label className={styles.root}>
            <span>{props.title}</span>
            <select {...props}>
                {props.children}
            </select>
        </label>
    )
}

export default SelectField;