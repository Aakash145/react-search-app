# React Search App

This is a simple React application implementing a search field that calls a backend service to provide suggestions in a dropdown as the user types. It handles edge cases like no data or slow network responses gracefully and ensures a responsive UI.

## Links

- GitHub Repository: [react-search-app](https://github.com/Aakash145/react-search-app)
- Deployed App: [React Simple Search](https://reactsimplesearch.netlify.app/)

## Tech Stack

- HTML
- CSS
- ReactJS (ReactHooks)
- npm packages: react-icons, react-spinners

## Functionality

- The FetchSuggestions are implemented in two ways: 
  1. Asynchronous fetch API Call.
  2. Using setTimeout to mimic a delaying backend service. (To use one or the other, it needs to be commented out.)
- Edge Cases handled:
  - No Data
  - Slow Network Responses (Using Bar Loader)
- UI is Responsive/Mobile-friendly (Using media queries and flex-layout).
- An alert pop-up shows up when the user clicks on a drop-down item.

## How to Run

To clone and run the application, follow these steps:

1. Run the following command in CMD: git clone https://github.com/Aakash145/react-search-app.git
2. Go to the project folder and run the following command: npm run start
