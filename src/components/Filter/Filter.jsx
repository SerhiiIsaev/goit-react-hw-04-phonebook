import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styles from './Filter.module.css';

const Filter = ({onFilterChange, filter}) => {
    return (
        <Fragment >
            <h3 className={styles.filterTitle}>Find contacts by name</h3>
            <input className={styles.filterInput} onChange={onFilterChange} name='filterInput' type="text" value={filter} />
        </Fragment>
    )
}

export { Filter }

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}