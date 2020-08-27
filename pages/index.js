import React from "react";
import axios from "axios";
import cookie from "js-cookie";

import Layout from "../components/Layout";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
    </Typography>
  );
}

export default function SignIn() {
  const [values, setValues] = React.useState({
    Email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const user = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.wodworx.com/v1/user/login",
        user,
        {
          headers: {
            Origin: "X-Requested-With",
          },
        }
      )
      .then((res) => {
        let resData = JSON.parse(res.request.response);
        if (resData.data.token) {
          
          alert( 'SUCCESSFUL LOGIN' );
        }
        if (resData.data.errors.email) {
          console.log(resData.data.errors.email);

          alert(resData.data.errors.email.join("\n"));
        } else {
          if (resData.data.errors.password) {
            alert(resData.data.errors.password);
            console.log(resData.data.errors.password.join("\n"));
          }
        }
      })

      .catch((err) => {
        console.log("error in request", err);
      });
  };

  return (
    <div class=" .bg-gry-500 " style={{ backgroundColor: "#2d2d2d" }}>
      <div>
        <Layout />
      </div>
      <div class="  min-h-screen  flex items-start  justify-center ">
        <div>
          <form
            class=".bg-gry-100 shadow-md rounded px-6 pt-6 pb-8 mb-4 "
            frameBorder={0}
            style={{ backgroundColor: "#3f3f3f" }}
            aria-hidden="false"
            tabIndex={0}
            onSubmit={onSubmit}
            method="post"
            noValidate
          >
            <div class="mb-4">
              <h1 class="text-gray-400 text-xl font-bold  px-8 pt-2 pb-2 italic">
                Login to your account
              </h1>
              <input
                class=" .bg-gry-300 shadow  appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                value={values.Email}
                onChange={handleChange("Email")}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                placeholder="Your email address"
                autoFocus
              />
            </div>
            <div class="mb-6">
              <input
                class=" bg-gry-300 shadow appearance-none border   rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Your password"
                value={values.password}
                onChange={handleChange("password")}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                autoComplete="current-password"
              />
            </div>
            <div>
              <button
                class="bg-blue-500  w-full py-2 px-3 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline"
                type="submit"
                variant="contained"
              >
                Sign In
              </button>

              <div>
                <a
                  class="inline-block align-baseline  py-2 px-3 font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
                <p class=" text-gray-400 text-xs py-2 px-3 italic">
                  Need an account? Absolutely! Sign Up for free.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
{
}

