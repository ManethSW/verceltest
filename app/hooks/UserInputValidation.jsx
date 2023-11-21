import { useState, useCallback } from "react";

const useInputValidation = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState("neutral");

  const validate = useCallback((e) => {
    setValue(e.target.value);
    setIsValid(validator(e.target.value) ? "valid" : "invalid");
  }, [validator]);

  return [value, isValid, validate];
};

export default useInputValidation;