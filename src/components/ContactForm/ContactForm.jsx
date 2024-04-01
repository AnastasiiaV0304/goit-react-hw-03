import css from "../ContactForm/ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.contactForm}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} type="text" name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMessage}
            />
          </label>
          <button className={css.button} type="submit">
            Add contacts
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
