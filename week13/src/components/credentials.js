import React from "react";

export default class CredsForm extends React.Component {
    render() {
        return(
            <form align="center" className="border border-dark col-4 mx-auto">
                <h3>Log In</h3>
                <div className="mb-3">
                    <label for="inputEmail1" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="inputPW" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="inputPW"/>
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        )
    }
}