"use client"
import styled from 'styled-components';
import Image from 'next/image';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
  body {
    background-color: #F9F9F9;
  }
`;

// Component for section headers
export const SectionHeader = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 44.47px;
  line-height: 54px;
  color: #23262F;
`;

export const ChooseTheFirstLetter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LetterSelection = styled.div`
  width: 78.125vw;
  background: #FFFFFF;
  border-radius: 21.3906px;
  padding: 12.5px 88px 12.5px 88px;
`
export const LetterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LetterCircle = styled.div`
  box-sizing: border-box;
  width: 71.3px;
  height: 71.3px;
  border-radius: 50%;
  display: flex;
  justify-content: center; 
  align-items: center; 

  margin: 0 5.5vh;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;

  border: 0.891274px solid #979797;
`

export const LineBetweenLetters = styled.div`
  width: 77.9vw;
  height: 0px;
  margin: 23px 0;

  border: 0.891274px solid #E6E6E6;
`;

export const AdvertisementRectangle = styled.div`
  display: flex;
  margin-top: 8vh;
  flex-direction: column;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  width: 78.125vw;
  border-radius: 30px;
`;

export const AdvertisementText = styled.div`
  font-size: 31px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
`;

export const AdvertisementImageTag = styled(Image)`
  position: relative !important;
  border-radius: 20px;
`;

export const ListOfSymbolsForLetter = styled.div`
  
`;