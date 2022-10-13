// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .number()
    .positive()
    .integer()
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const PhonebookForm = () => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    resetForm();
    console.log({ name: name.trim(), number: number.trim() });
    return { name: name.trim(), number: number.trim() };
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          <ErrorMessage name="name" />
          <span>Name</span>
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          <ErrorMessage name="number" />
          <span>Number</span>
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

PhonebookForm.propTypes = {};
