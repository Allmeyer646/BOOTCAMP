import React from "react";

export default class NavigationBar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Drew's Page</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Baseball</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Magic</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Secrets</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}