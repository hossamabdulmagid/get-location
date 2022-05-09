import './App.css';
import FindMissingNumber from "./components/algorithm/findmissingnumber.component";
import FindDublicate from "./components/algorithm/findublicate.component";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <FindMissingNumber/>
                <FindDublicate/>
            </header>
        </div>
    );
}

export default App;
