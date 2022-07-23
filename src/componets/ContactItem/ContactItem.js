import React from 'react';
import s from './ContatcItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      {name}: {number}
      <button className={s.btn} type="button" onClick={onDeleteContact}>
        <span className={s.btn__name}>delete</span>
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
