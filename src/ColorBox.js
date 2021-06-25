import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }
  /*Alternative syntax : `copy-overlay ${this.state.copy && "show"}` */
  render() {
    const { name, background, moreUrl, showLink } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={this.state.copied ? "copy-overlay show" : "copy-overlay"}
          ></div>
          <div className={`copy-msg ${this.state.copied && "show"}`}>
            <h1>copied</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
