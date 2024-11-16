# React Practice
These are some interesting or useful implementations I encountered during my learning process that are worth documenting.

## Vite + TypeScript + fluentUI

FluentUI is Microsoft's UI library, developed using TypeScript, and supports React.

## Implementations

### Searchable Dropdown List

Implemented a searchable dropdown list [SearchLanguage](./src/SearchLanguage.tsx)

1. Supports searching in the dropdown list
2. Supports mouse selection in the dropdown list
3. Supports Enter key selection in the dropdown list
4. Clears the input if the entered text is not in the dropdown list when focus is lost
5. Sets the input value to the list value if the entered text exists in the list when focus is lost

### useReducer example

[Messenger](./src/react-dev-demo/use-reducer/Messenger.jsx)

refer: https://react.dev/learn/extracting-state-logic-into-a-reducer


### useContext example

[HeadPage](./src/react-dev-demo/use-context/HeadPage.jsx)

refer: https://react.dev/learn/passing-data-deeply-with-context