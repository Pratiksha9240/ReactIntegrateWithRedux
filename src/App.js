import Counter from "./components/Counter";
import { Fragment } from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      {isAuthenticated && (
        <>
          <Header />
          <UserProfile />
        </>
      )}
      {!isAuthenticated && <Auth></Auth>}
      <Counter />
    </Fragment>
  );
}

export default App;
