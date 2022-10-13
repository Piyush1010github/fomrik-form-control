import React from "react";
import SelectBox from "./SelectBox";
import Textarea from "./Textarea";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
import FieldArrayComponent from "./FieldArray";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  console.log("control",control)
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
      case "fieldArray":
        return <FieldArrayComponent {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
