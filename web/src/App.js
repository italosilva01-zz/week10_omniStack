import React,{useState} from 'react';
import logo from './logo.svg';
import Header from './Header';
import './global.css';
import './Sidebar.css';
import './App.css';
import './Main.css';  

/*
Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere
no restante da aplicação 
Propriedade: Informações que um componente PAI passa para o componente
FILHO 
*/

function App() {
  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
        
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
          
          <div className="input-block">
            <label htmlFor="latitude">latitude</label>
            <input name="latitude" id="latitude" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="longititude">longititude</label>
            <input name="longititude" id="longititude" required></input>
          </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/34475811?s=460&u=2e626093f32cc53b22be31fa25cfff15c454e0bc&v=4" alt=""/>
              <div className="user-info"> 
                <strong>Francisco Italo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>

            </header>
            <p>
              Estudante
              <a href="https://github.com/italosilva01">Acessar perfil no github</a>

            </p>

          </li>

        

        <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/34475811?s=460&u=2e626093f32cc53b22be31fa25cfff15c454e0bc&v=4" alt=""/>
              <div className="user-info"> 
                <strong>Francisco Italo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>

            </header>
            <p>
              Estudante
              <a href="https://github.com/italosilva01">Acessar perfil no github</a>
              
            </p>

          </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/34475811?s=460&u=2e626093f32cc53b22be31fa25cfff15c454e0bc&v=4" alt=""/>
                <div className="user-info"> 
                  <strong>Francisco Italo</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>

              </header>
              <p>
                Estudante
                <a href="https://github.com/italosilva01">Acessar perfil no github</a>
                
              </p>

            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/34475811?s=460&u=2e626093f32cc53b22be31fa25cfff15c454e0bc&v=4" alt=""/>
                <div className="user-info"> 
                  <strong>Francisco Italo</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>

              </header>
              <p>
                Estudante
                <a href="https://github.com/italosilva01">Acessar perfil no github</a>
                
              </p>

            </li>
          </ul>
      </main>
    </div>
  )
}

export default App;
