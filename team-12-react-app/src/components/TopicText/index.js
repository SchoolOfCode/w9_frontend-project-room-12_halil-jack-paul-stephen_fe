/*
Plan
  This component renders an <h3> title with the weeks topic covered e.g. HTML
*/

/*
Code
  <h3> tag dependant on styling requirements
  Get request to fetch topics for this week
*/

import React from "react";

function Topic({lesson}) {
  return <h3 className="topic">{lesson}</h3>;
}

export default Topic;
