import React from "react";
import PropTypes from "prop-types";

const Tab = ({ tab, selectTabHandler, selectedTab }) => {
  return (
    <div
      className={tab === selectedTab ? "tab active-tab" : "tab"}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.array,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};
export default Tab;
