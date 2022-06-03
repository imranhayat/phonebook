import Form from "./Form";
import { List } from "./ContactsList/ContactsList";
import Filter from "./Filter/FIlter";

export default function App() {
  return (
    <>
      <Form />
      <Filter />
      <List />
    </>
  );
}