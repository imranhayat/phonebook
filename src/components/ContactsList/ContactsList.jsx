import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/contactsSliсe";

export const List = () => {
  const items = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    dispatch(remove(contactId));
  };

  const FilterItems = () => {
    return items.filter((item) => item.name.toLowerCase().includes(nameFilter));
  };

  let contacts = nameFilter === "" ? items : FilterItems();

  return (
    <>
      <h5 className="mt-4">Contacts</h5>
      {contacts.length > 0 ? (
        <ul className="list-group">
          {contacts.map(({ id, name, number }, index) => (
            <li key={id} index={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{name}:</strong> {number}
              </div>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => deleteContact(id)}></button>
            </li>
          ))}
        </ul>
      ) : (
        <h6>No Contacts Present</h6>
      )}
    </>
  );
};
