import PropTypes from 'prop-types';
import styles from './ContactList.module.css';


const ContactListItem = ({id, name, number, removeContact}) => {
    return (
        <li className={styles.listItem}>
            <p className={styles.listItemText}>{name}: {number}</p>
            <button className={styles.listItemBtn} onClick={()=>removeContact(id)} type='button'>delete</button>
        </li>
    )
}

export { ContactListItem }

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired
}