import React from "react";
import classNames from "classnames";

export default function Section(props) {
  let { children, className, show } = props;

  const classes = classNames("Section", { [`Section--show`]: show }, className);

  return <section className={classes} children={children} />;
}
