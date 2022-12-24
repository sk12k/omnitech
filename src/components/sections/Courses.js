import React from "react";
import Feature from "./Feature";
import classNames from "classnames";

const Course = ({
  title,
  desc,
  components,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  return (
    <div className="split-item">
      <div
        className="split-item-content center-content-mobile reveal-from-left"
        data-reveal-container=".split-item"
        style={{ height: 350 }}
      >
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          {/* Lightning fast workflow */}
        </div>
        <h3 className="mt-0 mb-12">{title}</h3>
        <p className="m-0">{desc}</p>
      </div>
      <div
        className={classNames(
          "split-item-image center-content-mobile reveal-from-bottom",
          imageFill && "split-item-image-fill"
        )}
        data-reveal-container=".split-item"
        
      >
        {/* <Image
        src={require('./../../assets/images/features-split-image-01.png')}
        alt="Features split 01"
        width={528}
        height={396} /> */}
        <ul>
          {components.map((c) => (
            <Feature title={c} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course;
