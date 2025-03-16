import React from "react";

const NameTag = (props) => (
  <div className="name-tag">
    <h3 className="title">Hello</h3>
    <p className="subtitle">My name is</p>
    <h2 className="name">{props.name}</h2>
  </div>
);

export default NameTag;
