import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card, key) => (
        <Card card={card} key={key} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default Cards;
