import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import sdata from './Src';

function netflixCard(val)
{
  return (
    <Card imgsrc={val.imgsrc}
    link={val.link}
    sname={val.sname}
    title={val.title} />
  );
}

ReactDOM.render(
  <>
  <h3>List Of Top Netflix Series</h3>
    {sdata.map(netflixCard)}
  </>
   ,
  document.getElementById('root')
);
reportWebVitals();
