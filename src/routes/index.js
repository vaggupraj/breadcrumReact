import { Switch, Route } from "react-router-dom";

import {
  AboutScreen,
  ContactScreen,
  DevicesScreen,
  HomeScreen,
  LaptopScreen,
  MobileScreen,
} from "../screens";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutScreen />
      </Route>
      <Route path="/contact">
        <ContactScreen />
      </Route>
      <Route exact path="/devices">
        <DevicesScreen />
      </Route>
      <Route exact path="/devices/laptop">
        <LaptopScreen />
      </Route>
      <Route exact path="/devices/mobile">
        <MobileScreen />
      </Route>
      <Route exact path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
