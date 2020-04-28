import React from "react";
import "./Login.css";
import Header from "../layout/Header/Header";

const subtitle = "Login";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  meterValue,
  formHandler,
  login__warning
}) => (
  <div className="login">
    <>
      <Header subtitle={subtitle} />
      <form id="login__form" onSubmit={formHandler}>
        <div class="logindiv">
          <div> 
          <label  for="id">Identifiant</label>
          </div>
        <div>
        <input
          type="email"
          name="id"
          placeholder="Enter your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label for="password">Password</label>
        </div>
        <div>
        <input
        class="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        </div>
        </div>

    <div class="info" >

    <div>
      <p id="login__warning" style={login__warning}>
          Le mot de passe doit être de 8 caractères minimum, contenir au moins 1
          chiffre, 1 caractère special et une majuscule<br></br>

          <div class="red">
          Email:123@hotmail.com<br></br>
          Password:P@s$w0rd0
          </div>
          </p></div>
        
          <div><meter id="meter" max="5" value={meterValue}></meter></div>
    </div>

        
        
        

        


        
        
        <input type="submit" value="Login" />
        <h3
          className=" login__error login__error--hidden"
          style={login__warning}
        >
          Votre mot de passe ne respect pas tous les critères
          <br />
          ou votre identifiant ou mot de passe n'est pas correct
        </h3>
      </form>
    </>
  </div>
);

export default Login;
