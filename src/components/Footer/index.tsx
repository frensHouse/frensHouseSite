import { Row, } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
     
      
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >



            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="100%"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              
            
              <SocialLink
                href="https://twitter.com/frensHouse"
                src="twitter_2.svg"
              />
              <SocialLink
                href="https://discord.gg/zsShfP4rr5"
                src="discord.svg"
              />
               <SocialLink
<<<<<<< HEAD
                href=""
                src="mirror.svg"
=======
                href="https://instagram.com/frens.house"
                src="instagram.svg"
<<<<<<< HEAD
>>>>>>> parent of f09f7a4b (update index.tsx)
              />
              <SocialLink
                href="https://www.youtube.com/channel/UClrd3aRPOpG7qq8bzq-zFpw"
                src="youtube.svg"
=======
>>>>>>> 65a1833299d12581ec6bd83e766a2389f03992b5
              />
              
           
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
