import { Formik, Form, Field } from "formik";
import toast from 'react-hot-toast';
import { FC } from "react";

interface SearchBarProps {
  onSearch:  (topic: string) => void
}

const SearchBar : FC<SearchBarProps> = ({ onSearch }) => {
    return (
      <Formik
      initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() !== '') {
            onSearch(values.query);
          actions.resetForm();
          } else {
           toast.error("The search field is empty. Please try again!");
          }
          return
      }}
    >
      <Form>
        <Field type="text" name="query" placeholder="Search images and photos" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar