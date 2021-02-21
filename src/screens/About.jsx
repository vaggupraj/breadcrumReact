import { AppNav, AppBreadCrumb } from "../components";

const AboutScreen = () => {
  return (
    <AppNav>
      <AppBreadCrumb routes={routes} />
      <h3>About</h3>
    </AppNav>
  );
};

export default AboutScreen;

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about", active: true },
];
