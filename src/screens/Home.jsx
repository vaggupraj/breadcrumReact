import { AppNav, AppBreadCrumb } from "../components";

const HomeScreen = () => {
  return (
    <AppNav>
      <AppBreadCrumb routes={routes} />
      <h3>Home</h3>
    </AppNav>
  );
};

export default HomeScreen;

const routes = [{ name: "Home", active: true, path: "/" }];
