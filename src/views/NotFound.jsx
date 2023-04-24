import React from "react";
import PageTitle from "../Components/PageTitle";

export default function NotFound() {
  return (
    <React.Fragment>
      <PageTitle error title="404" subtitle="Ops... Page not found!" />
    </React.Fragment>
  );
}
