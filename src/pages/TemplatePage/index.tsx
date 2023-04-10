import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";

import { TopBar } from "@/components/TopBar";
import column from "@/assets/column.svg";

import "./index.scss";

export const Template = () => {
  const location = useLocation();
  return (
    <div className="p-template">
      <img
        src={column}
        className={classNames("p-template__column", {
          "p-template__column--shifted": location.pathname !== "/",
        })}
      />
      <div className="p-template__content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};
