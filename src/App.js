import logo from "./logo.svg";
import "./App.css";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // Handle the result here.
  };

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCQbfQEmvRZ9jbsMXIknmByRqykUL8FBok",
    authDomain: "webscan-68e1d.firebaseapp.com",
    projectId: "webscan-68e1d",
    storageBucket: "webscan-68e1d.appspot.com",
    messagingSenderId: "193667189518",
    appId: "1:193667189518:web:8ac76329fef00cb0a8e55f",
    measurementId: "G-LTVH9CWSV3",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
