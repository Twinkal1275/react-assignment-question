import React from 'react';

const NameList = () => {

  return (
    <>
     <div className="list">
        <h1>The "React Way" to Render a List</h1>
        <ul>
            <li><input type='checkbox'/><a href='#'> Use Array.Map</a></li><br></br>
            <li><input type='checkbox'/> <a href='#'>Not a for loop</a></li><br></br>
            <li><input type='checkbox'/><a href='#'> Give each item a unique key</a></li><br></br>
            <li><input type='checkbox' placeholder=''/><a href='#'> Avoid using array index as the key</a></li>
        </ul>
     </div>
    </>
  );
};

export default NameList;