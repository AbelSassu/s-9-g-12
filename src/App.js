import "./App.css";
import Button from "./components/Button1";
import Img from "./components/Img1";
function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Button label="Hey Tesoro" />
                <Img
                    src="https://www.andreaminini.org/data/andreamininiorg/nc-trapezio-isoscele-esempio-am-2023-2.gif"
                    alt="Non penso proprio"
                />
                <Img
                    src="https://media.tenor.com/GPgVu42C8gUAAAAM/trapezio.gif"
                    alt="Non penso proprio"
                />
                <Button label="Troppo Grosso" />
            </div>
        </div>
    );
}

export default App;
