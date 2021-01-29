import logo from "./logo.svg";
import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import { Helmet } from "react-helmet";



function App() {
  return (
    <div>
      <Helmet>
        <title>Hello World</title>
        <meta name='description' content='this is a glitch i wonder if htere'/>
        <meta name='author' content='ibrahim yaacob'/>
        <body class='megalodone'/>
      </Helmet>

      <YoutubeForm />
    </div>
  );
}

export default App;
