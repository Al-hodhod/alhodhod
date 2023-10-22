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
  padding: 0 4.58vw;
`;

export const LetterSelection = styled.div`
  width: 78.125vw;
  background: #FFFFFF;
  border-radius: 21.3906px;
  padding: 0.65vh 0;
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

export const ListOfSymbolsForLetterSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8.54vh;
`;

export const LettersList = styled.div`
  width: 78.125vw;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 32px;
`;

export const SelectedLetterSection = styled.div`
  background-color: #F9F9F9;
  width: 174.81px;
  height: 230.1px;
  top: 2183.12px
  left: 873.04px
  border-radius: 0px, 0px, 80.27px, 80.27px
  font-size: 167px;
  font-weight: 700;
  line-height: 203px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LettersListItem = styled.div`
  width: 35.35vw;
  border-radius: 17.84px;
  background-color: #F9F9F9;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
`;

export const LetterListItemCircle = styled.div`
  width: 80.27px;
  height: 80.27px;
  margin: 12px 24px;
  border-radius: 50%;
  background: linear-gradient(93.5deg, #A2DA00 26.2%, #93C600 99.21%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;

export const LettersListItemTextGroup = styled.div`
  margin: auto 0;
`;

export const LettersListItemTextOne = styled.div`
  font-size: 29px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LettersListItemTextTwo = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LettersListItemArrowIcon = styled(Image)`
  margin: auto 0;
  margin-left: auto;
  margin-right: 25px;
  width: 1.67vw;
  height: 1.98vh;
`;

export const BackToLettersButton = styled.div`
  margin-top: 20px;
  width: 276px;
  height: 83px;
  border: 1px solid;
  border-color: #878787;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;
`;