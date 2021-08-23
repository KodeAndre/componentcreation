import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "footerTitle footerTitle footerTitle"
        "footerForm footerImage footerContact"; 
    width: 99%; 
    height: 99%;
    margin: 0px 5px;
`

const FooterForm = styled.div`
    grid-area: footerForm;
    display: flex;
`

const FooterTitle = styled.div`
    grid-area: footerTitle;
    text-align: center;
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

const FooterContact = styled.div`
    grid-area: footerContact;
`

const FooterImage = styled.img`
    grid-area: footerImage;
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

                </FooterImage>

                <FooterContact>
                    <h3>Kontakt</h3>
                </FooterContact>

            </FooterWrapper>
        </div>
    )
}