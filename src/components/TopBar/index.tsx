import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Divider } from "antd";

import { utils } from "@/utils";

import "./index.scss";

export const TopBar = () => {
  const location = useLocation();

  const pageNames = utils.CONSTANTS.PAGE_NAMES;
  const links = utils.CONSTANTS.PATHS;

  return (
    <div className="c-top-bar-holder">
      <div
        className={classNames("c-top-bar", {
          "c-top-bar--shifted": location.pathname !== "/",
        })}
      >
        <div className="c-top-bar-links">
          {/* @ts-ignore */}
          {Object.keys(links).map((key: keyof typeof links, index: number) => (
            <Link
              className={classNames("c-top-bar-link", {
                "c-top-bar-link--active": links[key] === location.pathname,
              })}
              to={links[key]}
              key={pageNames[key]}
            >
              {pageNames[key]}
            </Link>
          ))}
        </div>

        <Divider className="c-top-bar-divider" />
      </div>
    </div>
  );
};
