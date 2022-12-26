import React from "react";
import Feature from "./Feature";
import classNames from "classnames";
import CourseTile from "./CourseTile";

const Course = ({
  title,
  desc,
  image,
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
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  return (
    <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={tilesClasses}>
        {/* <div className="text-xxs text-color-primary fw-600 tt-u "> */}
          {/* Lightning fast workflow */}
        {/* </div> */}
        {/* <h3 className="mt-0 mb-12">{title}</h3>
        <p className="m-0">{desc}</p> */}
        <CourseTile title={title} description={desc} image={image} components={components}/>
      </div>
      {/* <div
        className={classNames(
          "split-item-image center-content-mobile reveal-from-bottom",
          imageFill && "split-item-image-fill", "mt-32"
        )}
        data-reveal-container=".split-item"
        
      > */}
        {/* <Image
        src={require('./../../assets/images/features-split-image-01.png')}
        alt="Features split 01"
        width={528}
        height={396} /> */}
        {/* <ul>
          {components.map((c) => (
            <Feature title={c} />
          ))}
        </ul> */}
      {/* </div> */}
    </div></div>
  );
};

export default Course;
