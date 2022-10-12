import React from "react";
import SelectBox from "./SelectBox";
import Textarea from "./Textarea";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <SelectBox {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
