import { At, InstagramLogo, MapPin, Phone, WhatsappLogo } from "phosphor-react";
import { FormerTitle } from "../../../../components/tipography";
import { ButtonContainer } from "../Intro/styles";
import { ContactContainer } from "./styles";

export function Contact() {
  return(
    <ContactContainer className="container">
      <div>
        <header>
          <FormerTitle size="s">Contact us!</FormerTitle>
        </header>
        <div className="content">
          <ul>
            <li>
              <MapPin weight="fill" size={24} color={"#00856F"}/>
              Mumbai
            </li>
            <li>  
              <At size={24} weight="bold" color={"#00856F"}/> 
              tailsofjoy@outlook.com
            </li>
            <li>  
              <Phone size={24} weight="fill" color={"#00856F"}/> 
              +91 8888899999
            </li>
            <li>  
              <InstagramLogo size={24} weight="bold" color={"#00856F"}/> 
              tailsofjoy
            </li>
          </ul>
          <a className="button" href="" target="_blank" >
            <ButtonContainer>
              <WhatsappLogo size={24} weight="bold" />               
              Schedule with us now!
            </ButtonContainer>
          </a>
        </div>
      </div>
      <div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.634848136666!2d72.82583577134686!3d19.10734312803155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630cdbe4f4d%3A0x4d31ae9f9e7c0e83!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1654028266323!5m2!1sen!2sin" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

    </ContactContainer>
  )
}