import { SectionHeader, ChooseTheFirstLetter, LetterSelection, LetterCircle, LetterRow, LineBetweenLetters, AdvertisementRectangle, AdvertisementImageTag, AdvertisementText, ListOfSymbolsForLetter } from "./page.styled";
import Image from 'next/image';
import GreenVector from "../../public/greenVector.png";
import AdvertisementImage from "../../public/advertisement.png";

export default function Home() {
  const firstRowAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const secondRowAlphabets = ['I', 'J', 'K', 'L', 'M', 'N', 'O'];
  const thirdRowAlphabets = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];
  const fourthRowAlphabets = ['X', 'Y', 'Z'];

  return (
  //  <main>
  //   <h1>Home</h1>
  //  </main>
  <div className="dictionaryOfDreams">
    <ChooseTheFirstLetter>
      <SectionHeader>
        Choose the first letter.
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
    <ListOfSymbolsForLetter>

    </ListOfSymbolsForLetter>
  </div>
  )
}
