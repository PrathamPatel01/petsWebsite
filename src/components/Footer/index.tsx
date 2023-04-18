import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { FooterContainer, SocialLinks } from "./styles"

export function Footer(){
  const currentYear = new Date().getFullYear();

  return(
    <FooterContainer>
      <p> © Tails of Joy, {currentYear}. All rights reserved
      </p>

      <SocialLinks>
          <a rel='noreferrer' target="_blank" 
            href="">
            <InstagramLogo size={32}/>
            </a>
          <a rel='noreferrer' target="_blank" 
            href="">
              <FacebookLogo size={32}/>
            </a>
          <a rel='noreferrer' target="_blank" 
            href="" >
              <WhatsappLogo size={32}/>
            </a>
        </SocialLinks>
    </FooterContainer>
  )
}