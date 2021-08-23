import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { faMapMarkerAlt, faMobileAlt, faEnvelope  } from '@fortawesome/free-solid-svg-icons'

const FooterWrapper = styled.div`
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 0.2fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "footerTitle footerTitle footerTitle"
        "footerForm footerImage footerContact"; 
    box-sizing: border-box;
    margin: 0px 5px;
    background-color: #fafafa;
    color: black;
`
const FooterTitle = styled.div`
    grid-area: footerTitle;
    text-align: center;
    letter-spacing: 4px;
`
const FooterForm = styled.div`
    grid-area: footerForm;
    justify-self: start;
    display: flex;
`
const FooterInput = styled.input`
    background: none;
    border: none;
    width: 15rem;
`
const FooterButton = styled.button`
  background: #5f5f5f;
  border: none;
  color: #fafafa;
  font-size: 1.4em;
`
const FooterImage = styled.div`
    grid-area: footerImage;
    width: 50%;
`
const FooterContactWrapper = styled.div`
    grid-area: footerContact;
    justify-self: end;
    text-align: end;
`
const FooterContact = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.2fr; 
    grid-template-rows: 1fr; 
    gap: 0px 10px; 
    grid-template-areas: 
        "FooterContactInfo FooterContactIcon";
`
const FooterContactInfo = styled.div`
    grid-area: FooterContactInfo;
`
const FCA = styled.div`
    line-height: 4px;
`
const FooterLink = styled.a`
    color: #fafafa;
`

export default function Footer() {
    return (
        <div>
            <FooterWrapper>

                <FooterTitle>
                    <h1>T A K O N T A K T</h1>
                </FooterTitle>

                <FooterForm>
                    <form>
                        <h3>Fullt Navn</h3>
                        <FooterInput type="text" placeholder="Fullt Navn" />
                        <hr />
                        <h3>Email</h3>
                        <FooterInput type="text" placeholder="Email" />
                        <hr />
                        <h3>Skriv Melding</h3>
                        <FooterInput type="text" placeholder="Skriv Melding" />
                        <hr />
                        <FooterButton type="submit" id="submitBtn">Lever</FooterButton>
                    </form>
                </FooterForm>

                <FooterImage>
                    <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-touching-business-friendship-gesture-png-image_5579229.jpg" alt="lol" width="200%"/>
                </FooterImage>

                <FooterContactWrapper>

                    <FooterContact>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{gridArea: "FooterContactIcon", alignSelf: "center", justifySelf: "center", fontSize: "36px"}}/>
                        <FooterContactInfo>
                            <h3>ADDRESSE</h3>
                            <FCA>
                                <p>Lilleheiegatene 13</p>
                                <p>5367 nord</p>
                                <p>Norway</p>
                            </FCA>
                        </FooterContactInfo>
                    </FooterContact>

                    <FooterContact>
                        <FontAwesomeIcon icon={faMobileAlt} style={{gridArea: "FooterContactIcon", alignSelf: "center", justifySelf: "center", fontSize: "36px"}}/>
                        <FooterContactInfo>
                            <h3>TELEFON</h3>
                            <FooterLink href="tel:99118833">99118833</FooterLink>
                        </FooterContactInfo>
                    </FooterContact>

                    <FooterContact>
                        <FontAwesomeIcon icon={faEnvelope} style={{gridArea: "FooterContactIcon", alignSelf: "center", justifySelf: "center", fontSize: "36px"}}/>
                        <FooterContactInfo>
                            <h3>E-MAIL</h3>
                            <FooterLink href="mailTo:Flowbergen@gmail.com">Flowbergen@gmail.com</FooterLink>
                        </FooterContactInfo>
                    </FooterContact>

                </FooterContactWrapper>

            </FooterWrapper>
        </div>
    )
}