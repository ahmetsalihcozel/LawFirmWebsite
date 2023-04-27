import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import "../styles.css"

const Portfolio = () => {
  const [animationClass, setAnimationClass] = useState('');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const elem = document.getElementById('portfolio');
      if (!elem) {
        return;
      }

      const rect = elem.getBoundingClientRect();
      const scrollPosition = window.innerHeight + window.pageYOffset;
      if (scrollPosition > rect.top + window.pageYOffset && !hasCounted) {
        setAnimationClass('animate__animated animate__fadeInUp');

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;
        let count5 = 0;
        let count6 = 0;
        let count7 = 0;

        const timer1 = setInterval(() => {
          if (count1 >= 10750) {
            clearInterval(timer1);
            setHasCounted(true);
          } else {
            count1 += 20;
            setCount1(count1);
          }
        }, 17);

        const timer2 = setInterval(() => {
          if (count2 >= 5420) {
            clearInterval(timer2);
            setHasCounted(true);
          } else {
            count2 += 20;
            setCount2(count2);
          }
        }, 16);

        const timer3 = setInterval(() => {
          if (count3 >= 6150) {
            clearInterval(timer3);
            setHasCounted(true);
          } else {
            count3 += 20;
            setCount3(count3);
          }
        }, 15);

        const timer4 = setInterval(() => {
          if (count4 >= 1000) {
            clearInterval(timer4);
            setHasCounted(true);
          } else {
            count4 += 20;
            setCount4(count4);
          }
        }, 14);

        const timer5 = setInterval(() => {
          if (count5 >= 7050) {
            clearInterval(timer5);
            setHasCounted(true);
          } else {
            count5 += 20;
            setCount5(count5);
          }
        }, 13);

        const timer6 = setInterval(() => {
          if (count6 >= 4700) {
            clearInterval(timer6);
            setHasCounted(true);
          } else {
            count6 += 20;
            setCount6(count6);
          }
        }, 12);

        const timer7 = setInterval(() => {
          if (count7 >= 35100) {
            clearInterval(timer7);
            setHasCounted(true);
          } else {
            count7 += 50;
            setCount7(count7);
          }
        }, 11);

        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasCounted]);

  return (
    <section className="page-section" id="portfolio" style={{backgroundColor:"#F4EEE0",paddingTop:"15em"}}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolyo</h2>
          <h3 className="section-subheading text-muted" style={{marginBottom:"40px"}}>Bu tecrübeyi nasıl edindik? İşte yaptıklarımız:</h3>
          <h5 style={{margin:"20px"}}>Müvekkillerimize Sunduğumuz Hizmet Sayısı:</h5>
          <div style={{height:"50px", width:"180px", marginLeft:"auto", marginRight:"auto", marginBottom:"2em", marginTop:"2em", backgroundColor:"#282A3A", borderRadius:"10px"}}>
            <h1 id="project-count" style={{color:"#e2b24c", fontSize:"2rem", padding:"5px"}}>+{count7}</h1>
          </div>
        </div>
        <div className="row">
          <PortfolioItem
            icon="./img/enforcement.jpg"
            text="İcra ve İflas hukuku"
            animationClass={animationClass}
            countFunc={() => count1}
          />
          <PortfolioItem
            icon="./img/criminal.jpg"
            text="Ceza Hukuku"
            animationClass={animationClass}
            countFunc={() => count2}
          />
          <PortfolioItem
            icon="./img/family_law.jpg"
            text="Aile Hukuku"
            animationClass={animationClass}
            countFunc={() => count3}
          />
          <PortfolioItem
            icon="./img/passaport_themis.jpg"
            text="Uluslararası Hukuk"
            animationClass={animationClass}
            countFunc={() => count4}
          />
          <PortfolioItem
            icon="./img/labor.jpg"
            text="İş Hukuku"
            animationClass={animationClass}
            countFunc={() => count5}
          />
          <PortfolioItem
            icon="./img/handshake.jpg"
            text="İhtiyari ve Zorunlu Arabuluculuk"
            animationClass={animationClass}
            countFunc={() => count6}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
