import Header from './components/Header/component/Header';
import './App.css';
import NavbarMenu from './components/NavbarMenu/component/NavbarMenu';
import PostUser from './components/PostUser/component/PostUser';
import c from './components/NavbarMenu/component/NavbarMenu.module.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Massage from './components/Massege/component/Massage';
import Foto from './components/Foto/component/Foto';
import Freands from './components/Freands/component/Freands';
const REW =[
  {section:'My profile', path: '/PostUser'},
  {section:'Messages',  path:'/Massage'},
  {section:'Foto',  path:'./Foto'},
  {section:'Freands',  path:'./Freands'}
]

function App() {
  return (
    <BrowserRouter>
    <div className="real container }">
        <div className ='heder'><Header   /></div>
        <div className = 'navb'><NavbarMenu sectins = {REW.map(i=><li className={c.item}><NavLink to ={i.path} >{i.section}</NavLink></li>)}/></div>
        <div className = 'userface'>
        <Route path = '/PostUser' component = {PostUser}/>
        <Route path = '/massage' component = {Massage}/>
        <Route path = '/Foto' component = {Foto}/>
        <Route path = '/Freands' component = {Freands}/>
        </div>
    </div>
    </BrowserRouter>
    );
    
  }

export default App;
