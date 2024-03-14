import { Box } from "@mui/material";
import React, { useState } from "react";

function Email() {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault()
    const config = {
      SecureToken: "64ad4683-41f4-49c6-b93e-bed4e834b62c",

      To: "nutan.coder@yopmail.com",
      From: formState.email,
      Subject: "This is the form my contact form ",
      Body: `${formState.name} connected to your email`,
    };

    if (window.Email) {
      window.Email.send(config).then(()=> alert('email sent successfully '))
    }
  };

  return (
    <>
      <Box>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={formState.name || ""}
            onChange={changeHandler}
          />
          <input
            type="email"
            value={formState.email || ''}
            placeholder="enter your email"
            name="email"
            onChange={changeHandler}
          />
          <input type="submit" value={"send email"} />
        </form>
      </Box>
    </>
  );
}

export default Email;
