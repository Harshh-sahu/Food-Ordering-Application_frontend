import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";

import { darkTheme } from "./Theme/DarkTheme";

import { CustomerRouter } from "./Routers/CustomerRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/State/Authentication/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(store => store.auth);

  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getUser(auth.jwt || jwt));
    }
  }, [dispatch, auth.jwt, jwt]); // Correctly includes dispatch and jwt in the dependency array

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRouter />
    </ThemeProvider>
  );
}

export default App;
