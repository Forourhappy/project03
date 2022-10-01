import React from 'react';

let box = {
  border: 'solid black 5px',
  width: '210',
  height: '210',
  'text-align': 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContents: 'center',
  margin: '20px',
  borderRadius: '20px',
  fontSize: '25px',
  fontFamily: 'MABINOGI_CLASSIC_OTF',
  backgroundColor: '#ffeaa7'
}

let boxName = {
  padding: '10px'
}


const PhotoCard = ({item}) => {
  console.log(item.name);
  console.log(item.url);
  return (
    <div style={box}>
      <div style={boxName}>{item.name}</div>
      <div><img alt={item.name} src={item.url}></img></div>
    </div>
  )
}

export default PhotoCard;