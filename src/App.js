import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to NFTMine!
        </p>
        <img src={logo} className="App-logo"/>
      </header>
      <div>
        <a className="metamask-button"> Connect MetaMask </a>
        <br></br>
        <br></br>
      </div>
        <div className="directions">
            <p>
             Step 1: Connect Wallet. <br></br>
             Step 2: Mine Rocks. <br></br>
             Step 3: Mint your NFT!
            </p>
            <br></br>
        </div>
      <div>   
        <a className="mine-button"> Mine </a>
        <br></br>
        <br></br>
      </div> 
    </div>
  );
}

export default App;