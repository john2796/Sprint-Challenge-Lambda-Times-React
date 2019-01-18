import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = ({ tabs, changeSelected, selectedTab }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map((tab, index) => (
          <Tab
            tab={tab}
            key={index}
            selectTabHandler={changeSelected}
            selectedTab={selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};
export default Tabs;
