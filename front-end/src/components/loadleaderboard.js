import React, { useState, useEffect } from 'react';

const LoadLeaderBoard = ({ length }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/`);
        const data = await response.json();
        console.log(data);
        if (data) {
          const sortedData = data.sort(
            (a, b) => Number(a.solved) - Number(b.solved)
          );
          const slicedData = sortedData.slice(0, Math.min(length, 20));
          setArr(slicedData);
        } else {
          console.log('No data');
        }
      } catch (error) {
        console.log('errorrrrrr', error);
      }
    };

    fetchData();
  }, [length]);

  return (
    <div style={{
        marginLeft:'10%'
    }}>
      <ol>
        {arr.map((entry) => (
          <li key={entry._id} style={{ display:'flex', flexDirection:'row', fontFamily:'Serif', color: 'white', fontSize:'200%', marginBottom:'7%' }}>
            <div style={{width:'50%'}}>
              {entry.username}
            </div>
            <div style={{width:'50%', paddingLeft:'25%'}}>
              {entry.solved}/9
            </div>
            
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LoadLeaderBoard;
