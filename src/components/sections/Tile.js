import React from "react";
import { ReactComponent as ImageTile1 } from '../../assets/images/feature-tile-icon-01.svg'


const Tile = ({title, description}) => {
  return (
    <div className="tiles-item reveal-from-bottom">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            <ImageTile1 />
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">{title}</h4>
          <p className="m-0 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tile;
