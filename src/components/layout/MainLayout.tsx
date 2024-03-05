import { Outlet } from "react-router-dom";
import Nabvar from "./Nabvar";

export default function MainLayout() {
  return (
    <div>
      <Nabvar />
      <Outlet />
    </div>
  );
}
