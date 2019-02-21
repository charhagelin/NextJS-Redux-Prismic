import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";

const BasicForm = ({ handleSubmit }) => {
  const submit = values => {
    console.log(values);
  };
  //using render field for costume styling of components
  const renderField = ({ label, type, input, meta: { touched, error } }) => (
    <div className="input-row">
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className="error">{error}</span>}
    </div>
  );

  //for handling submission validation https://redux-form.com/8.1.0/examples/submitvalidation/

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field
          label="First Name"
          name="firstName"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <Field
          label="Last Name"
          name="lastName"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <Field
          label="Email"
          name="email"
          component={renderField}
          type="email"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(BasicForm);

export default ContactForm;
