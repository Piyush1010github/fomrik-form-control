import React from "react";
import { Field, FieldArray } from "formik";
const FieldArrayComponent = (props) => {
  const { name, data, } = props;
  console.log("fieldArray");
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          {data && data.length > 0 ? (
            data.map((friend, index) => (
              <div key={index}>
                <Field name={`${name}.${index}`} value={friend.title} />
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                >
                  +
                </button>
              </div>
            ))
          ) : (
            <button type="button" onClick={() => arrayHelpers.push("")}>
              {/* show this when user has removed all friends from the list */}
              Add a friend
            </button>
          )}
        </div>
      )}
    />
  );
};

export default FieldArrayComponent;
