import Button from "@material-ui/core/Button";
import AccessAlarm from "@material-ui/icons/AccessAlarm";
import get from "lodash/get";
import React from "react";
import ReactDom from "react-dom";
import { foo } from "./foo";

const App = () => {
  console.log(foo());
  const language = get(window, "__LANGUAGE__", "No language");
  return (
    <div>
      <AccessAlarm />
      <Button>{language}</Button>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
