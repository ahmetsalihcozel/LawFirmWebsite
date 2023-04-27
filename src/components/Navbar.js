import React from "react";
import '../styles.css';
import '../parallax.css';
import logo from "../img/logo.png"

class Navbar extends React.Component {


    render() {

        return <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={{ backgroundColor: "#282A3A" }}>
            <div className="container " style={{ height: "3em" }}>
                <a className="navbar-brand logo nav-link nav-item" href="#page-top" onClick={() => window.scroll(0, 0)}>
                    <img src={logo} alt="..." />
                    <p className="logoText">Özdemir Avukatlık</p>
                </a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" style={{ fontSize: "18px", fontWeight: "bolder" }} href="#portfolio">PORTFOLYO</a></li>
                        <li className="nav-item"><a className="nav-link" style={{ fontSize: "18px", fontWeight: "bolder" }} href="#about">HAKKIMIZDA</a></li>
                        <li className="nav-item"><a className="nav-link" style={{ fontSize: "18px", fontWeight: "bolder" }} href="#services">HİZMETLERİMİZ</a></li>
                        <li className="nav-item"><a className="nav-link" style={{ fontSize: "18px", fontWeight: "bolder" }} href="#contact">İLETİŞİM</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    }
}

export default Navbar;