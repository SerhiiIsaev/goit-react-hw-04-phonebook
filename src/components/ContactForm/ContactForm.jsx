import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';


const ContactForm =({handleSubmit})=> {

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label htmlFor='username'>NAME</label>
            <input
                type="text"
                className={styles.inputName}
                id='username'
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor='userNumber'>NUMBER</label>
            <input
                type="tel"
                className={styles.inputTel}
                id='userNumber'
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={styles.contactFormBtn} type='submit'>Add contact</button>
        </form>
    )
    
    
}

export { ContactForm }

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}