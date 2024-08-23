import { Dashboard } from "app/views/Dashboard";
import { Rockets } from "app/views/Rockets";

export const ROUTES = [
  { name: "Dashboard", route: "/", component: Dashboard },
  { name: "Rockets", route: "/rockets", component: Rockets },
];
