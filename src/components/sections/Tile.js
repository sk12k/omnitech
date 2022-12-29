import React from "react";
import * as Icons from '@ant-design/icons';
// import { ReactComponent as ImageTile1 } from '../../assets/images/feature-tile-icon-01.svg'


const iconComp = (icon) => {
  if(icon === 'cloud'){
    return  <Icons.ClusterOutlined style={{ fontSize: '32px', color: 'white'}} />
  }
  if(icon === 'desktop'){
    return  <Icons.DesktopOutlined style={{ fontSize: '32px', color: 'white'}} />
  }
  if(icon === 'content'){
    return  <Icons.FileTextOutlined style={{ fontSize: '32px', color: 'white'}} />
  }
  if(icon === 'mobile'){
    return  <Icons.MobileOutlined style={{ fontSize: '32px', color: 'white'}} />
  }
}

const Tile = ({title, description, icon}) => {
  return (
    <div className="tiles-item reveal-from-bottom">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            {iconComp(icon)}
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
