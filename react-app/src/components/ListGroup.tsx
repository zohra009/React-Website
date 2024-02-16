// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // =-1 means no items is initialized/selected
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Hook function- which aloows us to tap in to built in feature sin React - state hook has data that can change over time
  //selectedIndex is a state variable and setSelectedIndex is a function and state changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; //variable (selectedIndex)
  //  arr[1]; //updated function

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Event Handler for OnClick event (event: MouseEvent) is a type annotation in typescript where we can annotate our variables/events and so on
  //   const handleClick = (event: MouseEvent) => console.log(event);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //empty 'fragment' is included - that's how react reads the empty braces <framgment> sames ad using <> and </>
  //in this JSX we cannot use conditional expression except when we use { } and ternary statement
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Not item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //   each property is on a separte line and this is a way to add classes dynamically in JSX
            className={
              selectedIndex === index
                ? "listed-group-item active"
                : "listed-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
