import { ContactsList } from "./ContactList.styled";
export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ContactsList>
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
    </ContactsList>
  );
};
