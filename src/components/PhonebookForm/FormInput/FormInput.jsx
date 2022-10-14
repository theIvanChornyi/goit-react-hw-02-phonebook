import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

export const FormInput = ({ inputType, formName }) => (
  <label htmlFor={formName}>
    <div>{formName}</div>
    <Field type={inputType} name={formName} id={formName} required />
    <ErrorMessage name={formName} />
  </label>
);

FormInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
};
