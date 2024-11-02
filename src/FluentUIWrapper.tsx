
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import SearchLanguage from './SearchLanguage';
import { LanguageDto } from "./types/LanguageDto";
import { useEffect, useState } from "react";


const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageDto | null>(null);
  const [languageOptions, setLanguageOptions] = useState<LanguageDto[]>([]);
  useEffect(() => {
    const languageOptions: LanguageDto[] = [
      {
        id: '1',
        name: 'Java',
        author: 'Gosling'
      }, 
      {
        id: '2',
        name: 'TypeScript',
        author: 'Microsoft'
      }, 
      {
        id: '3',
        name: 'Golang',
        author: 'Google'
      }, 
      {
        id: '4',
        name: 'Rust',
        author: 'Mozilla'
      }
    ];
    setLanguageOptions(languageOptions);
  }, []);

  const handleSlectedOption = (language: LanguageDto) => {
    setSelectedLanguage(language);
    console.log("selected language: " + language.name);
  }

  return (
    <FluentProvider theme={webLightTheme}>
      <SearchLanguage 
            languageOptions = {languageOptions} 
            selectedLanguage = {selectedLanguage}
            setSelectedLanguage = {setSelectedLanguage}
            handleSlectedOption = {handleSlectedOption}
            />
    </FluentProvider>
  );
};

export default Language;
