import { useState } from "react";

interface Props {
  listName: string;
  items: string[];
}

const List = ({ items, listName }: Props) => {
  let [itemIndex, setItemIndex] = useState(-1);

  return (
    <>
      <div>
        <h1>{listName}</h1>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Type food item"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            Add
          </button>
          <button className="btn btn-outline-danger" type="submit">
            Delete
          </button>
        </form>
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                itemIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setItemIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
