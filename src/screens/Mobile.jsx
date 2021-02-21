import { AppNav, AppBreadCrumb } from "../components";

const MobileScreen = () => {
  return (
    <AppNav>
      <AppBreadCrumb routes={routes} />
      <h3>Mobiles</h3>
    </AppNav>
  );
};

export default MobileScreen;

const routes = [
  { name: "Home", path: "/" },
  { name: "Devices", path: "/devices" },
  { name: "Mobiles", path: "/devices/mobile", active: true },
];
