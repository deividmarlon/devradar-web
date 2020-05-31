import React, {useState} from 'react';

import './styles.css';
import Select from 'react-select';

function ChallengeForm({ onSubmit }){

    const [phone, setPhone] = useState('');
    const [piece, setPiece] = useState('Peão');
    const [column, setColumn] = useState('A');
    const [line, setLine] = useState('1');
    const [response, setResponse] = useState('');

    const pieceOptions = [
      { value: 'Peão', label: 'Peão' },
      { value: 'Torre', label: 'Torre' },
      { value: 'Bispo', label: 'Bispo' },
      { value: 'Cavalo', label: 'Cavalo' },
      { value: 'Dama', label: 'Dama' },
      { value: 'Rei', label: 'Rei' }
    ];

    const columnOptions = [
      { value: 'A', label: 'A' },
      { value: 'B', label: 'B' },
      { value: 'C', label: 'C' },
      { value: 'D', label: 'D' },
      { value: 'E', label: 'E' },
      { value: 'F', label: 'F' },
      { value: 'G', label: 'G' },
      { value: 'H', label: 'H' }
    ];

    const lineOptions = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' },
      { value: '7', label: '7' },
      { value: '8', label: '8' }
    ];


    async function handleSubmit(e){
      e.preventDefault();
      console.log(piece);
      /*await onSubmit({
          phone,
          piece,
          column,
          line,
      });

      setPhone('');
      setPiece('');
      setColumn('');
      setLine('');
      */
    }

    async function handleAdd(e){
      if(response===''){
        setResponse(response+piece+column+line);
      }else{
        setResponse(response+'-'+piece+column+line);
      }
      
    }

    return(
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="phone">Digite seu celular completo:</label>
            <input 
              name="phone" 
              id="phone" 
              value={phone} 
              onChange = {e=> setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="piece">Defina os movimentos:</label>
          </div>
          <div className="response">
              <strong>{response}</strong>
          </div>
          <div className="input-block">
            <Select
              name="piece"
              options={pieceOptions}
              placeholder={'Selecione uma peça'}  
              onChange={e=> setPiece(e.value)}
              required
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <Select
              name="column"
              options={columnOptions}
              placeholder={'Selecione uma coluna'}  
              onChange={e=> setColumn(e.value)}
              required
              />
            </div>

            <div className="input-block">
              <Select
              name="line"
              options={lineOptions}
              placeholder={'Selecione uma linha'}  
              onChange={e=> setLine(e.value)}
              required
              />
            </div>
            
          </div>

          <button type="addMove" onClick={handleAdd}> Adicionar Movimento </button>
          <button type="submit"> Enviar </button>

        </form>
    )
}

export default ChallengeForm;