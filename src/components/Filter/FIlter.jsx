import { useDispatch, useSelector } from "react-redux";
import { filter } from "../Redux/contactsSliсe";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.contacts.filter);

  const onChange = (e) => {
    dispatch(filter(e.currentTarget.value.toLocaleLowerCase()));
  };

  return (
    <>
      <h5 className="mt-4">Find contacts by name</h5>
      <input type="search" value={value}
        onChange={onChange}
        placeholder="Search By Name" className="form-control form-control-lg" />
    </>
  );
};

export default Filter;
