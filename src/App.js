import MainPage from "./pages/Main";
import TravelList from "./pages/TravelList";
import {Switch, Route} from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/list">
          <TravelList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
