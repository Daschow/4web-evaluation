import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Login from "./Login";

import passwordStrength from "./Login.pure";

const EnhanceLogin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [meterValue, setmeterValue] = useState(0);
  const [login__warning, setLogin__warning] = useState({});
  const history = useHistory();


  const formHandler = e => {
    e.preventDefault();
    if (passwordStrength(password) < 5) {
      setLogin__warning({
        visible: "visible"
      });
      console.log("test");
    }
    if (password === "P@s$w0rd0" && email === "123@hotmail.com") {
      history.push("/Datagrid");
    }
  };

  useEffect(() => {
    setmeterValue(passwordStrength(password));
  }, [password]);

  return (
    <Login
      {...props}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      meterValue={meterValue}
      setmeterValue={setmeterValue}
      formHandler={formHandler}
      login__warning={login__warning}
    />
  );
};
export default EnhanceLogin;
