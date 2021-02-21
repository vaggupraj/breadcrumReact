import { AppNav, AppBreadCrumb } from "../components";

const LaptopScreen = () => {
  return (
    <AppNav>
      <AppBreadCrumb routes={routes} />
      <h3>Laptops</h3>
    </AppNav>
  );
};

export default LaptopScreen;

const routes = [
  { name: "Home", path: "/" },
  { name: "Devices", path: "/devices" },
  { name: "Laptops", path: "/devices/laptop", active: true },
];
