import React from "react";
import "../../App.js";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../../Login/login.container";
import Datagrid from "../../Datagrid/Datagrid.container";




const Navbar = ({}) => { 
  return (
    <Router>
      <>
        <Route path="/login" component={Login} />
        <Route path="/Datagrid" component={Datagrid} />
      </>
    </Router>
  );
};

export default Navbar;
