import React from "react";
import '../styles.css';
import '../parallax.css';
import Navbar from "./Navbar";
import Services from "./Services";
import Parallax from "./Parallax";
import Team from "./Team";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Logo from "../img/logo.png"
import Sidebar from "./SideBar"




/* const Books = "/img/Books.png";
const Hammer = "Court_Hammer.png";  */


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false }, () => {
                document.querySelector(".loading-bar").classList.add("fade-out");
            });
        }, 2500);
    }


    render() {
        return (
            <div style={{ backgroundColor: "white", overflow: "hidden" }}>
                <Navbar />
                <div className="loading-bar" style={{backgroundColor:"#F4EEE0"}}>
                    <img src={Logo} alt="..." className="loading-bar-logo"></img>
                    <h2 className="loading-text">Özdemir Avukatlık</h2>
                    <div className="loading-bar-inner"></div>
                </div>
                <Parallax />
                <Portfolio />
                <Team />
                <Services />
                <Sidebar />
                <Contact />
            </div>
        );
    }
}



export default App;