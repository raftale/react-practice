import { useState } from 'react';
import {
  Combobox,
  Option,
  Label,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";

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

const languageOptions:string[] = [
  'Java', 'JavaScript', 'TypeScript', 'Golang', 'Rust'
];
const includes = (text1:string, text2:string) => {
  return text1.toUpperCase().includes(text2.toUpperCase());
}
const includesInList = (list:string[], text: string) => {
  return list.some(option => includes(option, text));
}
export default function SearchLanguage() {
  const styles = useStyles();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const filteredLanguage = isTyping ?
    languageOptions.filter(option => searchText === ''
      || includes(option, (searchText || ''))
    ) : languageOptions;


  const handleComboboxOnChange = (value: string) => {
    setIsTyping(true);
    setSearchText(value);
    if (!value) {
      setSelectedLanguage('');
    }
  }

  return (

    <div className={styles.container}>
      <div className={styles.row}>
        <Label className={styles.label}>language</Label>
        <Combobox
          className={styles.input}
          selectedOptions={selectedLanguage ? [selectedLanguage] : []}
          onOptionSelect={(_, data) => {
            setSelectedLanguage(data.selectedOptions[0]);
            setSearchText(data.selectedOptions[0]);
            setIsTyping(false);
          }}
          value={searchText || ''}
          onChange={(e) => handleComboboxOnChange(e.target.value)}
          onBlur={() => {
            if (!includesInList(languageOptions, searchText)) {
              setSearchText('');
            } else {
              setSelectedLanguage(languageOptions.find(option => includes(option, searchText)) || '');
            }
            setIsTyping(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !includesInList(languageOptions, searchText)) {
              setIsTyping(false);
              console.log(languageOptions);
              console.log(searchText);
              setSelectedLanguage('');
              setSearchText('');
            }
          }}
        >
          {filteredLanguage.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Combobox>
        <div>{"hello "}  {selectedLanguage && <span>{selectedLanguage}</span>}</div>
        
      </div>
      

    </div>

  );
};