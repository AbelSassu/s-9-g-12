import "./App.css";
import Button from "./components/Button1";
import Img from "./components/Img1";
function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Button label="Hey Tesoro" />
                <Img
                    imageSrc="https://www.andreaminini.org/data/andreamininiorg/nc-trapezio-isoscele-esempio-am-2023-2.gif"
                    altText="Non penso proprio"
                />
                <Img
                    imageSrc="https://media.tenor.com/GPgVu42C8gUAAAAM/trapezio.gif"
                    altText="Non penso proprio"
                />
                <Button label="Troppo Grosso" />
            </div>
        </div>
    );
}

export default App;
