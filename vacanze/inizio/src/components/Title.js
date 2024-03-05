import React from "react";

const Title = ({text}) => {
  return (
    <div>
      <h4>{text || 'nuovo titolo'}</h4>
    </div>);
};

export default Title;
