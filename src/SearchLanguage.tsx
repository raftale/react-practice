import { useState, useEffect } from 'react';
import {
  Combobox,
  Option,
  Label,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import { LanguageDto } from './types/LanguageDto';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('15px'),
    maxWidth: '600px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('10px'),
  },
  label: {
    minWidth: '60px',
  },
  input: {
    flexGrow: 1,
  }
});

const includes = (text1: string, text2: string) => {
  return text1.toUpperCase().includes(text2.toUpperCase());
}
const includesInList = (list: LanguageDto[], text: string) => {
  return list.some(option => includes(option.name, text));
}
export default function SearchLanguage({languageOptions, selectedLanguage, setSelectedLanguage, handleSlectedOption}: 
  {languageOptions: LanguageDto[], selectedLanguage: LanguageDto | null, setSelectedLanguage:(language:LanguageDto |null) => void,  handleSlectedOption: (language: LanguageDto) => void}) {
  
  
  const styles = useStyles();
  const [searchText, setSearchText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (selectedLanguage) {
      setSearchText(selectedLanguage.name);
    }
  }, [selectedLanguage]);

  const filteredLanguage = isTyping ?
    languageOptions.filter(option => searchText === ''
      || includes(option.name, (searchText || ''))
    ) : languageOptions;


  const handleComboboxOnChange = (value: string) => {
    console.log("combobox onChange: " + value);
    setIsTyping(true);
    setSearchText(value);
  }

  return (

    <div className={styles.container}>
      <div className={styles.row}>
        <Label className={styles.label}>language</Label>
        <Combobox
          className={styles.input}
          onOptionSelect={(_, data) => {
            if(!data.optionValue) {
              return;
            }
            const selected = languageOptions.find(lang => lang.id === data.optionValue);
            if (!selected) {
              return;
            }
            handleSlectedOption(selected);
            setSearchText(selected.name);
            setIsTyping(false);
          }}
          value={searchText || ''}
          onChange={(e) => handleComboboxOnChange(e.target.value)}
          onBlur={(e) => {
            console.log(e.target.value);
            if (!includesInList(languageOptions, searchText)) {
              setSearchText('');
              setSelectedLanguage(null);
            } else {
              setSelectedLanguage(languageOptions.find(option => includes(option.name, e.target.value)) || null);
            }
            setIsTyping(false);
          }}

          onKeyDown={(e) => {
            console.log("key pressed: " + e.key);
            console.log("search text: " + searchText);
            // if enter key is pressed and the search text is not in the list, clear the search text  
            if (e.key === 'Enter' && !includesInList(languageOptions, searchText)) {
              setIsTyping(false);
              setSelectedLanguage(null);
              setSearchText('');
            }
          }}
        >
          {filteredLanguage.map((option) => (
            <Option key={option.id} value={option.id}
            >
              {option.name}
            </Option>
          ))}
        </Combobox>
        <div>{"hello "}  {selectedLanguage && <span>{selectedLanguage.name}</span>}</div>

      </div>


    </div>

  );
};