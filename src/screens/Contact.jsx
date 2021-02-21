import { AppBreadCrumb, AppNav } from "../components";

const ContactScreen = () => {
  return (
    <AppNav>
      <AppBreadCrumb routes={routes} />
      <h3>Contact Us</h3>
    </AppNav>
  );
};

export default ContactScreen;

const routes = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact", active: true },
];
