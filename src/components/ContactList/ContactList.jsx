import PropTypes from 'prop-types';
import { ContactListItem } from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ items, removeContact}) => {
    
    const Elements = items.map(item => {
        return(<ContactListItem key={item.id} id={item.id} name={item.name} number={item.number} removeContact={removeContact} />)
    })
    return (
        <ul className={styles.contactList}>
            {Elements} 
        </ul>
    )
}

export { ContactList }

ContactList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    removeContact: PropTypes.func.isRequired,
}