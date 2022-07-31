import './App.css';
import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/icecream/IceCreamView";
import { UserView } from "./user/UserView";


function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App;
