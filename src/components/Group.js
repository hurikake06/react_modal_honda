import React from "react";

export default class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  render() {
    let { name, image } = this.props;
    let isModalOpen = this.state.isModalOpen;
    let modal = isModalOpen ? this.getModalElement() : null;

    return (
      <div className="group-item">
        <div className="group-name">{name}</div>
        <img
          className="group-image"
          src={image}
          alt={name}
          onClick={this.handleClickOpen}
        />
        {modal}
      </div>
    );
  }

  getModalElement = () => {
    return (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-header" />
          <div className="modal-introduction">
            <h2>{this.props.name}</h2>
            <p>{this.props.mission}</p>
          </div>
          <button className="modal-close-btn" onClick={this.handleClickClose}>
            CLOSE
          </button>
        </div>
      </div>
    );
  };

  handleClickOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleClickClose = () => {
    this.setState({ isModalOpen: false });
  };
}
