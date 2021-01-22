import "./SeassonDisplay.css";
import React from "react";
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // {text,iconName}
  // const text = season === "winter" ? "Burr it's chilly" : "Let's hit the beach";
  // const icon = season === "winter" ? "snowflake" : "sun";

  console.log(season);
  console.log(props.lat);
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive icon-right ${iconName} icon`} />
    </div>
  );
};
const seasonConfig = {
  summer: {
    text: "Let's hit the beach YOOO",
    iconName: "sun",
  },
  winter: {
    text: "Burr it's chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};

export default SeasonDisplay;
