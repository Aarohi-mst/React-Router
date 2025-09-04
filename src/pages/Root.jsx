import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const Root = () => {
  return (
    <div>
      <h1>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </h1>
    </div>
  );
};

export default Root;
