import { Link } from "react-router-dom";

const AppBreadCrumb = ({ routes }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {routes.map((route) => (
          <li className="breadcrumb-item">
            {route.active && route.name}
            {!route.active && <Link to={route.path}>{route.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default AppBreadCrumb;
