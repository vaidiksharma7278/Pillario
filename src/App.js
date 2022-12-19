
import './App.css';
import BusinessContent from './component/Business/BusinessContent';
import Content from './component/Content/Content';
import Header from './component/Header';
import background from './Images/Background.mp4'
function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id='video'>
        <source src={background} type='video/mp4'/>
      </video>
      <Header/>
      <Content/>
      <BusinessContent/>
    </div>
  );
}

export default App;
