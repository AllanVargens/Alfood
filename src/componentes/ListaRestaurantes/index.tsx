import axios from 'axios';
import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  useEffect(() => {
    //OBTER RESTAURANTES
    axios.get('http://localhost:8000/api/v1/restaurantes/')
      .then(resposta => { 
        setRestaurantes(resposta.data.results); 
      })
      .catch(erro => {
        console.log(erro)
      })
  }, []);// [] -> executa uma vez quando o componente é montado.

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
  </section>)
}

export default ListaRestaurantes