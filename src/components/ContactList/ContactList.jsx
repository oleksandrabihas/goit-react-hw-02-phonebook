export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
