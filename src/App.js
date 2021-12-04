
import './App.css';
import ListDoc from './Component/ListDoc';
import { Provider } from 'react-redux'
import store from './redux/store'
import AddDoc from './Component/AddDoc';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddDoc />
        <ListDoc />
      </div>
    </Provider>
  );
}

export default App;
