import Header from './components/Header/component/Header';
import './App.css';
import NavbarMenu from './components/NavbarMenu/component/NavbarMenu';
import PostUser from './components/PostUser/component/PostUser';
import c from './components/NavbarMenu/component/NavbarMenu.module.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Massage from './components/Massege/component/MassagePagest';
import MassageSend from './components/Massege/component/MassageSend';
const PATH =[
  {section:'My profile', path: '/PostUser'},
  {section:'Messages',  path:'/Massage'},
]

function App() {
  return (
    <BrowserRouter>
    <div className="real container }">
        <div className ='heder'><Header   /></div>
        <div className = 'navb'><NavbarMenu sectins = {PATH.map(i=><li className={c.item}><NavLink to ={i.path} >{i.section}</NavLink></li>)}/></div>
        
        <div className = 'userface'>
        <Route path = '/PostUser' component = {PostUser}/>
        <Route path = '/Massage' component = {Massage}/>
        <Route path = '/MassageSend' component = {MassageSend}/>
        </div>
    </div>
    </BrowserRouter>
    );
    
  }

export default App;
