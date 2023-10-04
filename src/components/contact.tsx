import {AiOutlineMobile, AiOutlineMail ,AiFillGithub, AiFillLinkedin, AiFillFacebook} from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="container mt-5 mb-5">
      <h3 className="fw-700 fs-xs-lg fs-sm-xl mb-2 text-center">Feel free to contact me</h3>
      <div className="custom-flex">
        <div>
          <h5 className="fs-xs-md fs-sm-lg mt-2 space-mono">Visit my socials</h5>
          <div className="d-flex flex-column">
            <a href="https://github.com/Beqa-Beqa" target="_blank" className="text-black contact-link mt-2 italic">
              <div className="d-flex align-center">
                <AiFillGithub className="contact-icon" /><span className="fw-600 fs-xs-sm fs-sm-md"> - Visit my Github account</span>
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008281275132&mibextid=ZbWKwL" target="_blank" className="text-primary contact-link mt-2 italic">
              <div className="d-flex align-center">
                <AiFillFacebook className="contact-icon" /><span className="fw-600 fs-xs-sm fs-sm-md"> - Visit my Facebook profile</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/beka-aladashvili-30619525b/" target="_blank" className="text-primary contact-link mt-2 italic">
              <div className="d-flex align-center">
                <AiFillLinkedin className="contact-icon" /><span className="fw-600 fs-xs-sm fs-sm-md"> - Visit my LinkedIn page</span>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h5 className="fs-xs-md fs-sm-lg mt-2 space-mono">Send an email</h5>
          <div className="d-flex flex-column">
            <a href="mailto:beka.aladashvili.383@gmail.com?subject=Job%20Offer" target="_blank" className="text-black contact-link mt-2 italic">
              <div className="d-flex align-center">
                <AiOutlineMail className="contact-icon" /><span className="fw-600 fs-xs-sm fs-sm-md"> - beka.aladashvili.383@gmail.com</span>
              </div>
            </a>
          </div>
          <div>
            <h5 className="fs-xs-md fs-sm-lg mt-2 space-mono">Make a call</h5>
            <span className="text-black italic d-flex align-center mt-2">
              <AiOutlineMobile className="contact-icon" /><span className="fw-600 fs-xs-sm fs-sm-md"> +995 574 09 56 32</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;