import {useState} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

function App() {
  const [dateState, setDateState] = useState({
    newDate: '',
    birthday: '1992-06-21',
    showStats: false
  })

  const changeBirthday = () => {
    console.log(dateState);
    setDateState({ 
      birthday: dateState.newDate,
      showStats: true
    });
  }

    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl 
            type="date"
            onChange={ e => setDateState({ newDate: e.target.value })}
          >
          </FormControl>
          <Button onClick={changeBirthday}>
            Submit
          </Button>
          {
            dateState.showStats ?
              <div className="fade age-stats">
                <AgeStats date={dateState.birthday} />
              </div>
            :
              <div></div>
          }
          
        </Form>
      </div>
    )
  }        


export default App;