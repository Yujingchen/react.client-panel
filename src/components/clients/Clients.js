import React, { Component } from "react";
import { Link } from "react-router-dom";
class Clients extends Component {
  render() {
    const clients = [
      {
        id: "83578234",
        firstName: "Kevin",
        lastName: "Smith",
        email: "Ksmith@hotmail.com",
        phone: "4444-444-444",
        balance: "30"
      },
      {
        id: "431903234",
        firstName: "Jack",
        lastName: "Doe",
        email: "JDoe@google.com",
        phone: "333-333-333",
        balance: "20"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {" "}
                    {client.firstName} {client.lastName}
                  </td>
                  <td> {client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      {" "}
                      <i className="fas fa-arrow-circle-right" />
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading..</h1>
        </div>
      );
    }
  }
}

export default Clients;
