import { SectionHeader, ChooseTheFirstLetter, LetterSelection, LetterCircle, LetterRow, LineBetweenLetters, AdvertisementRectangle, AdvertisementImageTag, AdvertisementText, ListOfSymbolsForLetterSection, LettersList, SelectedLetterSection, LettersListItem, LetterListItemCircle, LettersListItemTextGroup, LettersListItemTextOne, LettersListItemTextTwo, LettersListItemArrowIcon, BackToLettersButton } from "./page.styled";
import Image from 'next/image';
import GreenVector from "../../public/greenVector.png";
import AdvertisementImage from "../../public/advertisement.png";
import ArrowIcon from "../../public/arrow-icon.png"

export default function Home() {
  const firstRowAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const secondRowAlphabets = ['I', 'J', 'K', 'L', 'M', 'N', 'O'];
  const thirdRowAlphabets = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];
  const fourthRowAlphabets = ['X', 'Y', 'Z'];

  const renderLettersListItems = () => {
    const itemsToRender = 22;
    const items = [];

    for (let i = 0; i < itemsToRender; i++) {
      items.push(
        <LettersListItem key={i}>
          <LetterListItemCircle>{i + 1}</LetterListItemCircle>
          <LettersListItemTextGroup>
            <LettersListItemTextOne>Lorem ipsum</LettersListItemTextOne>
            <LettersListItemTextTwo>21 Dreams found</LettersListItemTextTwo>
          </LettersListItemTextGroup>
          <LettersListItemArrowIcon src={ArrowIcon} alt="< >" />
        </LettersListItem>
      );
    }

    return items;
  };

  return (
  //  <main>
  //   <h1>Home</h1>
  //  </main>
  <div className="dictionaryOfDreams">
    <ChooseTheFirstLetter>
      <SectionHeader>
        Choose the first letter
      </SectionHeader>
      <Image src={GreenVector} alt="Green Vector" />
      <LetterSelection>
        <LetterRow>
          {firstRowAlphabets.map((letter, index) => (
            <LetterCircle key={index}>
              {letter}
            </LetterCircle>
          ))}
        </LetterRow>
        <LineBetweenLetters/>
        <LetterRow>
          {secondRowAlphabets.map((letter, index) => (
            <LetterCircle key={index}>
              {letter}
            </LetterCircle>
          ))}
        </LetterRow>
        <LineBetweenLetters/>
        <LetterRow>
          {thirdRowAlphabets.map((letter, index) => (
            <LetterCircle key={index}>
              {letter}
            </LetterCircle>
          ))}
        </LetterRow>
        <LineBetweenLetters/>
        <LetterRow>
          {fourthRowAlphabets.map((letter, index) => (
            <LetterCircle key={index}>
              {letter}
            </LetterCircle>
          ))}
        </LetterRow>
      </LetterSelection>
      <AdvertisementRectangle>
        <AdvertisementText>
          Advertisement
        </AdvertisementText>
        <AdvertisementImageTag src={AdvertisementImage} layout="fill" alt="Advertisement" />
      </AdvertisementRectangle>
    </ChooseTheFirstLetter>
    <ListOfSymbolsForLetterSection>
      <SectionHeader>
        List of Symbols for Letter
      </SectionHeader>
        {/* <SelectedLetterSection> Need to fix
          R 
        </SelectedLetterSection> */}
      <LettersList>
        {renderLettersListItems()}
      </LettersList>
      <BackToLettersButton>Back To Letters</BackToLettersButton>
      <AdvertisementRectangle>
        <AdvertisementText>
          Advertisement
        </AdvertisementText>
        <AdvertisementImageTag src={AdvertisementImage} layout="fill" alt="Advertisement" />
      </AdvertisementRectangle>
    </ListOfSymbolsForLetterSection>
  </div>
  )
}
