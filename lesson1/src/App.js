import Massage from './Massage';
import './App.css';
const TEXT_INFO = ' As social animals, people have always relied on communication to strengthen their relationships. When face-to-face discussions are impossible or inconvenient, humans have dreamed up plenty of creative solutions. Avalaunch Media recently unveiled their Interactive Infographic entitled, “The Complete History of Social Media.”'

function App() {
  return (
    <div className="real">
        <Massage text = {TEXT_INFO} />
    </div>
    )
}

export default App;
