import React, {useEffect,useState} from 'react'; // Toda vez que for trabalhar com HTML dentro do .js, precisa-se importar o react
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import ChallengeForm from './components/ChallengeForm';
import ChallengeItem from './components/ChallengeItem';

function App() {

  const [devs,setDevs] = useState([]);

  useEffect(()=> {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);

    }

    loadDevs();
  },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);
    console.log(response.data);
    setDevs([...devs,response.data]);   
  }


  return (

    <div id="app">

      <main>
          {devs.map(dev => (
            <ChallengeItem key={dev._id} dev={dev} />
          ))}
      </main>
      
      <aside>
        <strong>Solução</strong>
        <ChallengeForm onSubmit={handleAddDev}/>
      </aside>

    </div>

  );

}

export default App;

//REACT é movido por três conceitos:
// COMPONENTE: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// COMPONENTE: Primeira letra sempre maiúscula

// PROPRIEDADE: Informações que o componente PAI passa para o componente filho  

// ESTADO: Informação mantidas e atualizadas pelo componente (lembrar conceito IMUTABILIDADE)



//REGRAS:
// Somente 1 componente por arquivo .js


//<> </>: Componente FRAGMENT utilizado para englobar vários COMPONENTES