import React from "react";
import classes from "./Layout.module.scss"

export default class Layout extends React.Component{
  render() {
    return(
      <div className={classes.Layout}>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
