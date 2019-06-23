import React from "react";

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }
  handleClickOpen() {
    this.setState({ isModalOpen: true });
  }
  handleClickClose() {
    this.setState({ isModalOpen: false });
    console.log(this.state.isModalOpen);
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header" />
            <div className="modal-introduction">
              <h2>{this.props.name}</h2>
              <p>{this.props.mission}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => {
                this.handleClickClose();
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="group-item">
        <div className="group-name">{this.props.name}</div>
        <img
          className="group-image"
          src={this.props.image}
          alt={this.props.name}
          onClick={() => {
            this.handleClickOpen();
          }}
        />
        {modal}
      </div>
    );
  }
}

export default Group;
