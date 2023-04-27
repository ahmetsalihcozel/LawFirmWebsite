import React, { useState } from 'react';
import '../parallax.css';

function Contact() {

  const handleEmailClick = () => {
    window.location.href = "mailto:ozdemiravukatlik@gmail.com";
  }

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+905531853110");
  }

  function handleCall() {
    window.location.href = 'tel:+90-553-185-31-10';
  }

  const [contactInfo] = useState([
    { title: "e-Posta", value: "ozdemiravukatlik@gmail.com" },
    { title: "Adres", value: "Hacı Yusuf, Kaşif Acar Cd. No:3/3, 10200 Bandırma/Balıkesir" },
    { title: "Sabit Hat", value: "+90 266 715 10 50" },
    { title: "Cep Numarası", value: "+90 553 185 31 10" },
  ]);

  return (

      <div className="page-section" id="contact" style={{ backgroundColor: "#F4EEE0", paddingBottom:"0px",marginTop:"5em"}}>
          <div className="row text-center">
            <h2 className="section-heading text-uppercase" style={{color:"#282A3A"}}>İLETİŞİM</h2>
            <h3 className="section-subheading text-muted" style={{color:"#282A3A"}}>
              Etkileşimli logolar ile hızlıca iletişime geçin.
            </h3>
          </div>
        <div className='contIcons'>

          <div className="email">
            <img src="./white-img/email-blue.png" alt="email icon" onClick={handleEmailClick} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
            <h4 onClick={handleEmailClick} style={{ cursor: "pointer", textAlign: "center", marginTop: "1em", color:"#282a3a"}} id="contact">e-Posta</h4>
          </div>

          <div className="whatsapp">
            <img src="./white-img/whatsapp-blue.png" alt="whatsapp icon" onClick={handleWhatsappClick} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
            <h4 onClick={handleWhatsappClick} style={{ cursor: "pointer", textAlign: "center", marginTop: "1em", color:"#282a3a" }} id="contact">WhatsApp</h4>
          </div>

          <div className="telephone">
            <img src="./white-img/phone-call-blue.png" alt="telephone icon" onClick={handleCall} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
            <h4 onClick={handleCall} style={{ cursor: "pointer", textAlign: "center", marginTop: "1em", color:"#282a3a" }} id="contact">Arama</h4>
          </div>
        </div>

        <iframe title='özdemiravukatlik' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.2672257627238!2d27.970782944310915!3d40.355410302400855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5d309caea3e3f%3A0xaca71d73e9a0f67c!2zw5ZaREVNxLBSIEFWVUtBVExJSyB2ZSBEQU5JxZ5NQU5MSUsgT0bEsFPEsA!5e0!3m2!1str!2str!4v1681244658205!5m2!1str!2str"
          style={{
            width: "100%", height: "450px", style: "border:0",
            allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
            marginBottom: "1em"
          }}
        ></iframe>

        <div style={{padding:"2em"}}>
          {contactInfo.map((info, index) => (
            <div key={index} className="row" style={{ width: "700px", display: "flex", marginLeft: "auto", marginRight: "auto", maxWidth:"100%"}}>
              <div className="col-5" style={{position:"relative", right:"0px", /* borderBottom: "1px solid", paddingBottom: "5px", borderBottomStyle:"dashed" */}}>
                <p className="" style={{fontSize:"18px", fontWeight: "4px",marginBottom:"5px", color:"#282a3a", fontStyle:"italic" }}>{info.title}:</p>
              </div>
              <div className="col-7" style={{wordWrap: "break-word", }}>
                <p className="" style={{fontSize:"18px", fontWeight: "4px",marginBottom:"5px", color:"#282a3a", fontStyle:"italic"}}>{info.value}</p>
              </div>
            </div>
          ))}
        </div>



      </div>
  );
}

export default Contact;
