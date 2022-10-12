import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

const RegistrationForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    description: "",
    gender: "",
    radioOption: "",
    skills: [],
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    description: Yup.string().required("Required"),
    gender: Yup.object().required("Required"),
    radioOption: Yup.string().required("Required"),
  });

  const genderOption = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];

  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          {console.log("fomrik", formik.values)}
          <FormikControl
            control="input"
            type="text"
            label="First Name"
            name="first_name"
          />

          <FormikControl
            control="input"
            type="text"
            label="Last Name"
            name="last_name"
          />

          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />

          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirm_password"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            options={genderOption}
            label="Select Gender"
            name="gender"
          />

          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Your skillset"
            name="skills"
            options={checkboxOptions}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
