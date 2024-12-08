import React from "react";
import modules from "./Loader.module.css";
export default function Loader() {
  return <div data-testid="loader" className={modules.loader}></div>;
}
