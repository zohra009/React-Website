// import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
  if (items.length === 0) {
    // return (
    //   //empty bracets are <framgemt> that wraps our html of react components
    //   <>
    //     <h1>List</h1>
    //     <p>No items found</p>
    //   </>
    // );
  }
  return (
    //empty 'fragment' is included - that's how react reads the empty braces <framgment> sames ad using <> and </>
    //in this JSX we cannot use conditional expression except when we use { } and turenary statement
    <>
      <h1>Lists</h1>
      {items.length === 0 ? <p>Not item found</p> : null}{" "}
      {/* if this message is true return <p> msg otherwise render nothing */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
