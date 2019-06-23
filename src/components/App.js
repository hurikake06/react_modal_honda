import React from "react";
import Group from "./Group";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let companies = this.props.companies;
    return (
      <div>
        <div className="copy-container">
          <h1>Ateam</h1>
          <h2>Group Companies</h2>
        </div>
        <div className="group">
          {companies.map(company => {
            return (
              <Group
                key={company.id}
                name={company.name}
                image={company.image}
                mission={company.mission}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
