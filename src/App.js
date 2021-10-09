import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
        <header style={{fontWeight: 'bold',fontSize: 30,}} >Windows 10 Nvidia Optimizations </header>
      <div>
        <b style={{fontWeight: 'bold', fontSize: 20,}}>Enable Game Mode:</b>
        <div style={{color:"#333333", }}>
          When you use Game Mode, Windows prioritises your gaming experience. When you’re running a game, Game Mode:
          <div style={{color:"#333333"}}>- Prevents Windows Update from performing driver installations and sending restart notifications.</div>
          <div style={{color:"#333333"}}>- Helps achieve a more stable frame rate depending on the specific game and system.</div>

          <div style={{paddingTop: 10, paddingBottom: 5, color:"#333333"}}>{'1. Open Start > Type "Game Mode" > Click on First Result'}</div>
          <img style={{marginLeft:20, border:'1px solid #333333'}} src={require('./assets/GameMode1.jpg').default} ></img>
          <div style={{paddingTop: 10, paddingBottom: 5, color:"#333333"}}>
            {'2. Once Opened > Enable Game Mode > go into Graphics settings'}
          </div>
          <img style={{ border:'1px solid #333333', marginLeft:20}} src={require('./assets/GameMode2.jpg').default} ></img>
          <div style={{paddingBottom: 15, color:"#333333"}}>
            {'3. Enable Hardware-accelerated GPU scheduling > in graphics performance preference add your game and set it to high performance'}
          </div>
          <img style={{marginLeft:20, border:'1px solid #333333', marginBottom:10}} src={require('./assets/GameMode3.jpg').default} ></img>

          <div style={{fontWeight: 'bold', fontSize: 20, color:"black"}}>{'Nvidia Settings:'}</div>
          <div style={{paddingBottom: 15, color:"#333333"}}>
            {'1. Right-Click Desktop > Click on Nvidia Control Panel >  Manage 3D Settings Tab'}
          </div>
          <div style={{paddingBottom: 15, color:"#333333"}}>
            {'2. Now click on Program Settings > and locate your game under “Select a Program to Customize” or using the "add" button.'}
          </div>
<div>sources:
https://support.xbox.com/en-CA/help/games-apps/game-setup-and-play/use-game-mode-gaming-on-pc
</div>
        </div>
      </div>
    </div>
  );
}

export default App;
