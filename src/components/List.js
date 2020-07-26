import React from "react";
import "./List.css";
import FlipMove from 'react-flip-move';

function List(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          ></input>
          <span>
            <button
              className="del_btn"
              onClick={() => {
                props.deleteItem(item.key);
              }}>Delete</button>
          </span>
        </p>
      </div>
    );
  });
  return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
}

export default List;
