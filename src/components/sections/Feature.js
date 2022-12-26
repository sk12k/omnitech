import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

const Feature = ({ title }) => {
  return (
    // <Card hoverable style={{ width: "30", height: 60, margin: 20, }}>
    //   <Meta
    //   avatar={<img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style={{width: 40, height: 40}} />}
    //   title={title}
    //   style={{margin: '-14px'}}
    // />
    // </Card>
    <span style={{fontSize: '12px', fontWeight: 700, color: 'black'}} >{title}</span>
  );
};

export default Feature;
