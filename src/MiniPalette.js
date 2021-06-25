import React from "react";
// import { WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { style } from "@material-ui/system";
const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
