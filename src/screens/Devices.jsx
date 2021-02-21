import { AppNav, AppBreadCrumb } from "../components";

const DevicesScreen = () => {
  return (
    <AppNav>
      <AppBreadCrumb routes={routes} />
      <h3>Devices</h3>
    </AppNav>
  );
};

export default DevicesScreen;

const routes = [
  { name: "Home", path: "/" },
  { name: "Devices", path: "/devices", active: true },
];
