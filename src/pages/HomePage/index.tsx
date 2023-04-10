import car from "@/assets/Ferrari.svg";

import "./index.scss";

export const HomePage = () => {
  return (
    <div className="p-home-page">
      <div className="p-home-page-content">
        <div className="p-home-page__branding">
          <h1 className="p-home-page__branding-title">TunerX</h1>
          <p className="p-home-page__branding-subtitle">
            Where real tuning happens
          </p>
        </div>

        <img className="p-home-page-image" src={car} />
      </div>
    </div>
  );
};
