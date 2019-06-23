import React from "react";

export default class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  render() {
    let { name, image } = this.props;
    let modal = this.state.isModalOpen ? this.getModalElement() : null;

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
    let { name, mission } = this.props;
    return (
      <div className="modal" onClick={this.modalOnClick}>
        <div className="modal-inner">
          <div className="modal-header" />
          <div className="modal-introduction">
            <h2>{name}</h2>
            <p>{mission}</p>
          </div>
          <button className="modal-close-btn" onClick={this.handleClickClose}>
            CLOSE
          </button>
        </div>
      </div>
    );
  };

  handleClickOpen = () => this.setState({ isModalOpen: true });

  handleClickClose = () => this.setState({ isModalOpen: false });

  modalOnClick = e => {
    if (e.target.className === "modal") this.handleClickClose();
  };
}
