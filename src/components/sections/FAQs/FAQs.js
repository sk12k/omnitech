import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import Faq from "react-faq-component";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Why should I learn DevOps?",
      content: `Learning DevOps can help you become a more valuable and in-demand member of a software development 
          team and contribute to the success of your organisation.`,
    },
    {
      title: "Why should I learn Cloud Computing?",
      content:
        "Cloud computing is a rapidly growing field, and there is a high demand for professionals with cloud skills. According to a report by Indeed, the number of job postings for cloud computing roles has increased by more than 500% over the past five years.",
    },
    {
      title: "How does Omnitech pricing works?",
      content: `We have different pricing models to suit everyone's needs. Contact us for more information and get a pricing to suit your needs.`,
    },
    {
      title: "Does Omnitech provide hands-on labs for practice?",
      content: `Depending on the course content you have chosen, we have several types of labs available ranging from full fledged Virtual Machines with admin access to AWS and Azure accounts with limited time validity to practice.`
    },
  ],
};

const styles = {
  bgColor: "transparent",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "grey",
  arrowColor: "white",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const FAQs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner mb-32",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="about">
        <div className={innerClasses}>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </section>
  );
};

FAQs.propTypes = propTypes;
FAQs.defaultProps = defaultProps;

export default FAQs;
