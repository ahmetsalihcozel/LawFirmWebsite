import React from "react";
import '../styles.css';
import curly from "../img/curly.jpg"
import blonde from "../img/blonde.jpg"

class Team extends React.Component {


    render() {
        return (
            <div id="about">
                <h2 className="section-heading text-uppercase pt-5" style={{ textAlign: "center" }} >HAKKIMIZDA</h2>
                <div style={{backgroundColor:"#F4EEE0"}} >
                    <div className="container px-5 mt-5" >
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="pt-5 pb-5 pl-1 pr-1"><img className="img-fluid rounded-circle" src={curly} alt="..." /></div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="pt-5 pb-5 pl-1 pr-1">
                                    <h2 className="display-4">Av. Zeynep Özdemir</h2>
                                    <p style={{ textAlign:"justify", textJustify: "inter-word"}}>Özdemir Avukatlık & Danışmanlık ofisinin kurucu avukatı Zeynep Özdemir İzmir Dokuz Eylül Üniversitesi Hukuk Fakültesi'nde lisans eğitimini tamamlamış olup, Özel Hukuk alanında yüksek lisans yapmıştır. 
                                    Avukatlık mesleğinin yanısıra İş Hukuku alanında resmi bilirkişilik yapmaktadır. 
                                    Adalet Bakanlığına bağlı Uzman Arabulucu sıfatına sahip olup arabuluculuk faaliyetleri yürütmektedir. 
                                    İş Sağlığı ve Güvenliği eğitmenliği sıfatına sahip olup iş güvenliği uzmanı ve işyeri hekimlerine hukuk eğitimi vermektedir.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:"#F4EEE0", marginTop:"5em"}}>
                    <div className="container px-5 mt-5" style={{backgroundColor:"#F4EEE0" ,marginTop:"5em"}}>
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="pt-5 pb-5 pl-1 pr-1"><img className="img-fluid rounded-circle" src={blonde} alt="..." /></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="pt-5 pb-3 pl-1 pr-1">
                                    <h2 className="display-4">Av. Büşra Özdemir</h2>
                                    <p style={{ textAlign:"justify", textJustify: "inter-word"}}>Özdemir Avukatlık & Danışmanlık ofisinin kurucu avukatı Zeynep Özdemir İzmir Dokuz Eylül Üniversitesi Hukuk Fakültesi'nde lisans eğitimini tamamlamış olup, Özel Hukuk alanında yüksek lisans yapmıştır. 
                                    Avukatlık mesleğinin yanısıra İş Hukuku alanında resmi bilirkişilik yapmaktadır. 
                                    Adalet Bakanlığına bağlı Uzman Arabulucu sıfatına sahip olup arabuluculuk faaliyetleri yürütmektedir. 
                                    İş Sağlığı ve Güvenliği eğitmenliği sıfatına sahip olup iş güvenliği uzmanı ve işyeri hekimlerine hukuk eğitimi vermektedir.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Team;