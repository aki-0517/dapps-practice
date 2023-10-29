import { useState } from "react";

type GreetFormProps = {
  message: string;
  updateMessage: (m: string) => void;
}

const GreetForm = ({ message, updateMessage }: GreetFormProps) => {
    const [formValue, setFormValue] = useState<string>("");
    return (
      <>
        <h3>{message}</h3>
        <input
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
          value={formValue}
        ></input>
        <button onClick={() => updateMessage(formValue)}>update</button>
      </>
    );
  };
  export default GreetForm;