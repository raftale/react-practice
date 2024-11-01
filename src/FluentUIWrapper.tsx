
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import SearchLanguage from './SearchLanguage';

const Email = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <SearchLanguage />
    </FluentProvider>
  );
};

export default Email;
