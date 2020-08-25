import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "../components/Layout";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

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
      .post("https://api.wodworx.com/v1/user/login", { email, password })
      .then((res) => {
        console.log("res", res);
        if (res.data.token) {
          AsyncStorage.setItem("token", JSON.stringify(res.data.token));
          // cookie.set('token', data.token, {expires: 2});
        } else {
          if (res.data.errors.password === "Incorrect email or password") {
            alert("Incorrect email or password");
          }
          if (res.data.errors.email === "Email cannot be blank.") {
            alert("Email cannot be blank.");
          }
          if (res.data.errors.password === "password cannot be blank.") {
            alert("password cannot be blank.");
          }
          if (res.data.errors.email === "Email is not a valid email address.") {
            alert("Email cannot be blank.");
          }
        }
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Layout />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src="/static/logo.png" alt="logo" height="50" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={onSubmit}
          method="post"
          noValidate
        >
          <TextField
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
            autoFocus
          />
          <TextField
            value={values.password}
            onChange={handleChange("password")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            <Grid item>
              <p id="result"></p>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
