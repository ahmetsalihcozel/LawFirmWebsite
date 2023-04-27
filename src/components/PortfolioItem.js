import '../parallax.css';

const PortfolioItem = ({ icon, text, countFunc, animationClass }) => {

  return (
    <div className="col-lg-4 col-sm-12 mb-4">
      <div className={`portfolio-item ${animationClass}`}>
        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1" style={{ textAlign: 'center' }}>
          <div className="portfolio-hover ">
            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
          </div>
          <img className="d-flex" style={{width:"100%", height:"250px"}} src={icon} alt="" />
        </a>
        <div className="portfolio-caption" style={{backgroundColor:"#282A3A"}}>
          <h5 style={{color:"#F4EEE0"}}>{text}</h5>
          <h3 className="project-count" style={{color:"#e2b24c", margin:"0px", padding:"0px"}}>+{countFunc()}</h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
