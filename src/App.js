import './App.css';
import { useState } from 'react';

import { Button } from 'react-bootstrap';

import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


//EVERYTHING IS SET UP RIGHT NOW FOR VERSION 1

// need bellow for version 2
import { addOne,reduceOne } from './components/AddReduceFunc';
import ImageMaker from './components/ImageMaker';
//---------------------------------------------------------------

// need for version 3
// import ComponentFunc from './components/ComponentFunc'
//---------------------------------------------------------------


function App() {
  //need count for version 1,2,3
  const [count, setCount] = useState(0)


  //need for version 1----------
  
  const addOne = ()=>{
    return setCount(count+1)
  }

  const reduceOne = ()=>{
    if(count>=1){
      setCount(count-1)
    }
    return count
  }

  //--------version 1 end------------
  

  return (
    <div className="App">
      <Container >
      
        <Row id='one'>

            <Col>
              <h1 class="text-center">ZOGO</h1>
            </Col>

            <Col>
              <h1 class="text-center">MENU</h1>
            </Col>

        </Row>
        
        <Row>

          <Col>
            <div className="d-flex justify-content-end">
              <Button id="button1" onClick={reduceOne}>reduce 1</Button>
            </div>
          </Col>

          <Col>
            <div className="border d-flex justify-content-center">
              <h1 id='count'>{count}</h1>
            </div>
          </Col>

          <Col>
            <div className="d-flex justify-content-start">
              <Button id="button2" onClick={addOne}>add 1</Button>
            </div>
          </Col>

        </Row>

        <Row id='row-three'>
            <Col>
              <div className="border d-flex justify-content-center">
                <ImageMaker count={count}/>

              </div>
            </Col>
          
          
        </Row>

      </Container>

       
      
      {/* version 1 */}

      

      {/* <button id='minus'
        onClick={reduceOne}>reduce 1</button>
        
        <h1 id='counter' >{count}</h1>
      
      <button id='plus'
        onClick={addOne}>add 1</button>

      <Button>TEST</Button> */}

    
      {/* version 2  */}
      {/* <div>
        <button onClick={()=>setCount(reduceOne(count))}>reduce 1</button>
          <h1>{count}</h1>
        <button onClick={()=>setCount(addOne(count))}>add 1</button>

      </div> */}
      


      {/* version 3  */}

      {/* <ComponentFunc 
        count = {count}
        setCount = {setCount}
      /> */}

        

    </div>
  );
}

export default App;