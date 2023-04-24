import React from "react";

export default function PageTitle(props) {
  return (
    <React.Fragment>
      <h1 className={props.className}>{props.title}</h1>
      <h2 className={props.className}>{props.subtitle}</h2>
    </React.Fragment>
  );
}
