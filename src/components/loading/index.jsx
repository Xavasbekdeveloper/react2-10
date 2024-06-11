import React, { memo } from "react";

import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loader"></div>
    </div>
  );
};

export default memo(Loading);
