import React from 'react';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';


function Buscador (){
     const navigate = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length === 0){
            swAlert(<h5>Tiene q escribir una palabra</h5>)
        }else if(keyword.length < 4){
            swAlert(<h1>Tiene q escribir una palabra</h1>)
        }else{
            e.currentTarget.keyword.value = '';
            navigate(`resultados?keyword=${keyword}`);
        }
 }
    return(
        <>
        <div>
          <form onSubmit={submitHandler} >
            <label>
                <input type="text" name="keyword" placeholder='escribe una palabra clave...' /><br/>
            </label>
              <button type="submit">Buscar</button>
            
        </form>
        </div>
        </>
    )
}

export default Buscador;