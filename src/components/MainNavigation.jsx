import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end // helps to help the active links once visited and now moved on to next
              >
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Products
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
