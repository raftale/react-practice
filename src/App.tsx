
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import SearchLanguage from './SearchLanguage';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <SearchLanguage />
    </FluentProvider>
  );
};

export default App;