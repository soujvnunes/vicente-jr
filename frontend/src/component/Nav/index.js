import React from "react";
import classNames from "classnames";
import { ReactComponent as Logo } from "../../asset/logo.svg";
import IconButton from "../IconButton";
import Skew from "../Skew";

export default props => {
  let { children, indicator } = props;

  const classes = {
    root: [classNames("Nav-wrapper")],
    runner: [
      classNames("Nav-links-indicator", {
        [`Nav-${indicator}-indicator`]: indicator
      })
    ]
  };

  let { root, bar, runner } = classes;

  return (
    <nav className={root}>
      <div className={"Nav"}>
        <a href={"/"} className={"Nav-logo"}>
          <Logo />
        </a>
        <div className={"Nav-links"}>
          <Skew axis={"y"} className={runner} />
          {children}
        </div>
        <aside className={"Nav-footer"}>
          <IconButton
            icon={"instagram"}
            url={"https://instagr.am/vicentejrteambrasil"}
            noHover={true}
            className={"Nav-footer-link"}
          />
          <IconButton
            icon={"phone"}
            url={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
            noHover={true}
            className={"Nav-footer-link"}
          />
          <IconButton
            icon={"youtube"}
            url={"https://youtube.com"}
            className={"Nav-footer-link"}
            noHover={true}
          />
        </aside>
      </div>
    </nav>
  );
};
