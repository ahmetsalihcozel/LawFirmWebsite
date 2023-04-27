import React, { useEffect, useRef } from "react";
import '../parallax.css';
import JusticeWoman from "../img/Justice_Woman.png"
import Hammer from "../img/Court_Hammer.png"
import Table from "../img/table.png"

function Parallax() {

  const value = useRef(0);

  useEffect(() => {
    let text = document.getElementById('text');
    let justiceWoman = document.getElementById('justice-woman');
    let hammer = document.getElementById('hammer');
    let parallax = document.getElementById('mb_parallax_one');

    window.addEventListener('scroll', () => {
      value.current = window.scrollY;
      const marginTopValue = value.current <= 550 ? value.current * 1 : null; // set a maximum marginTop value of 750px
      text.style.marginTop = marginTopValue + 'px';
      justiceWoman.style.marginRight = value.current * 1 + 'px';
      hammer.style.marginLeft = value.current * 1 + 'px';
      parallax.style.backgroundPositionY = value.current * -0.1 + 'px';
    });
  }, []);



  return (
    <div id="page-top" className="page-top">
      <div className="parallax" id="mb_parallax_one" style={{ overflow: "visible" }}>
        <h2 id="text" style={{ position: "absolute", textAlign: "center"}}>
          Özdemir<br/>Avukatlık ve Danışmanlık<br />
        </h2>

        <img src={JusticeWoman} alt="justice" id="justice-woman" />
        <img src={Hammer} alt="hammer" id="hammer" />
        <img src={Table} alt="table" id="table" />
      </div>
    </div>
  );
}

export default Parallax;
