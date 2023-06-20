import PropTypes from 'prop-types';
const ContactList = ({dataContact, deleteList}) => {
  
  return (
    <ul>
      {dataContact.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            id={id}
            onClick={() => {
              deleteList(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ),
        deleteList: PropTypes.func.isRequired,
    };

export default ContactList;
