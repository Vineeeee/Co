import './App.css';
import { createGlobalStyle } from 'styled-components';
import './font/font.css'
import { Provider } from 'react-redux';
import store from './redux/store'
import { AppRoutes } from './components/routes';


function App() {

  return (
    <>
    <Provider store={store}>
      <Global/>
      <AppRoutes/>
    </Provider>
    </>
  );
}

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'MainFont', sans-serif;
  list-style: none;
}
a{
  color: black;
}
`

export default App;
