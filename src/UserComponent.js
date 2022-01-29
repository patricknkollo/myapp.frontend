import axios from "axios";
import React, { Component } from "react";
import FrontendBackendComponent from "./FrontendBackendComponent";

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      vorname: "",
      name: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8081/api/user/select/users2").then((res) => {
      this.setState({
        id: 0,
        vorname: "",
        name: "",
      });
    });
  }

  submit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/api/user/save/user", {
        name: this.state.name,
        vorname: this.state.vorname,
      })
      .then((res) => {
        this.componentDidMount();
      });
  }

  render() {
    return (
      <div>
        <div>
          <h2>HTML Forms</h2>

          <form onSubmit={(e) => this.submit(e)} action="/action_page.php">
            <label for="fname">First name:</label>
            <br></br>
            <input
              onChange={(e) => this.setState({ vorname: e.target.value })}
              value={this.state.vorname}
              type="text"
              id="fname"
              name="vorname"
              placeholder="John"
            />
            <br></br>
            <label for="lname">Last name:</label>
            <br></br>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              type="text"
              id="lname"
              name="name"
              placeholder="Doe"
            />
            <br></br>
            <button className="btn btn-succes" type="submit">
              add user
            </button>
          </form>

          <p>
            If you click the "Submit" button, the form-data will be sent to a
            page.
          </p>
        </div>
      </div>
    );
  }
}

export default UserComponent;
