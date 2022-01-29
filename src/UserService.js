import React, { Component } from "react";
import FrontendBackendComponent from "./FrontendBackendComponent";

class UserService extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    FrontendBackendComponent.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.context.history.push("/users");
  }
  render() {
    return (
      <div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((users) => (
                <tr key={users.id}>
                  <td> {users.vorname} </td>
                  <td> {users.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserService;
