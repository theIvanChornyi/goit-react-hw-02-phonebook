import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import { schema } from './validationSchema';
import { FormInput } from './FormInput';

export const PhonebookForm = ({ onAddContact, initState }) => {
  const checkUniqContactName = name => {
    const isIncludes = !!initState.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return isIncludes;
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (checkUniqContactName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      resetForm();
      const newContact = { name: name.trim(), number: number.trim() };
      onAddContact(newContact);
    }
  };

  const { name, number } = initState;
  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormInput inputType="text" formName="name" />
        <FormInput inputType="tel" formName="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

PhonebookForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  initState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
