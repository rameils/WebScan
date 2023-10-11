import logo from "./logo.svg";
import "./App.css";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // Handle the result here.
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web Barcode Scanner</p>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
