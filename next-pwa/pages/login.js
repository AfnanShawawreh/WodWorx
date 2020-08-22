import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import Link from "next/link";
import Layout from "../components/Layout";
import axios from "axios";
const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://api.wodworx.com/v1/user/login", { email, password })
      .then((res) => {
        console.log("res", res);
        if (res.data.token) {
          AsyncStorage.setItem("token", JSON.stringify(res.data.token));
          
        } else {
          if (res.data.errors.password === "Incorrect email or password") {
            alert("Incorrect email or password");
          }
          if (res.data.errors.email=== "Email cannot be blank.") {
            alert("Email cannot be blank.");
          }
          if (res.data.errors.password=== "password cannot be blank.") {
            alert("password cannot be blank.");
          }
          if (res.data.errors.email=== "Email is not a valid email address.") {
            alert("Email cannot be blank.");
          }
        }
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </form>
    </Layout>
  );
};

export default Login;
