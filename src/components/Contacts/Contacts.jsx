import PropTypes from 'prop-types';

export const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
