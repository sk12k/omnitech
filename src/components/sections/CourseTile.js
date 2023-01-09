import React from "react";
import { Card } from "antd";
import CardDesc from "./CardDesc";

const { Meta } = Card;

const CourseTile = ({ title, description, image, components }) => (
  <div className="mb-16 mt-16">
    <Card
      style={{ width: Math.min(window.innerWidth * 0.9, 800) }}
      cover={
        <img
          alt="example"
          src={image}
        />
      }
    >
      <Meta
        style={{ textAlign: "left" }}
        //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={
          <span style={{ fontSize: "40px", fontWeight: 700, color: "black" }}>
            {title}
          </span>
        }
        description={
          <CardDesc description={description} components={components} />
        }
      />
    </Card>{" "}
  </div>
);

export default CourseTile;
