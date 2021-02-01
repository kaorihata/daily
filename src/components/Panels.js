import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled'
import { render } from '@testing-library/react';

/* 
  * Style
*/
const Panel = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  gap: 1.5rem;

  .card{
    background: #FFF0BF;
    position: relative;
  }
  .card-media{
    width: 360px;
    img{
      width: 360px;
      height: 300px;
      transition: all .2s ease-in-out;

      &:hover{
        filter: grayscale(30%);
        transform: scale(1.12);
      }
  }
    .title{
      background: #EB5E28;
      width: calc(100% - 30px);
      margin-top: -30px;
      padding: 0.5rem;
      color: #FFFCF2;
      font-size: 1.25rem;
      position: relative;
    }
  }
  .card-text{
      padding-left: 1.5rem;
      padding-right: 0.5rem;
      font-size: 1.125rem;
      margin: 1rem 0;
  }
  button {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
  }

  @media(max-width:768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width:576px){
    max-width: 320px;
    grid-template-columns: 1fr;
    justify-content: center;
  }
`


function Panels(props){
  const [News, setNews] = useState([]);

  function fetchNews(){
    const apiKey = 'Z7xEsJyfhqUdpNbCfkBh8bXxQ129cLj2'

    return axios.get(`https://api.nytimes.com/svc/topstories/v2/${props.section}.json?api-key=${apiKey}`)
    .then(res => {
      console.log(res.data.results);
      setNews(res.data.results)
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  useEffect(() => {
    fetchNews()
  },[])

  return (
    <Panel>
      {News.map(article =>     
        <div className="card">
          <a className="card-media" target="_blank" href={article.url}>
            <img src={article.multimedia === null ? "https://via.placeholder.com/360x300.png?text=Visit+nytimes.com" : article.multimedia[0].url}/>  
            <div className="title">{article.title}</div>  
          </a>
          <div className="card-text">{article.abstract}</div>
        </div>
      )}
    </Panel>
  ) 
}
 
export default Panels;