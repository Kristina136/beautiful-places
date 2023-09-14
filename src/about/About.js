import { useState } from "react";
import { data0 } from "./data0";
import Button from "./Button";
import EachPlace from "./EachPlace";

function About() {
  const [object, setObject] = useState(data0);
  const filterPlace = (term) => {
    const newPlace = data0.filter((element) => element.term === term);
    setObject(newPlace);
  };
  return (
    <div>
      <h1 className="header">Top {data0.length} beautiful Place in the word</h1>
      <Button filterPlace={filterPlace} />
<div className="container">
      {object.map((element) => {
        return ( 
          <EachPlace
            name={element.name}
            place={element.place}
            image={element.image}
            id={element.id}
          />
        );
      })}
      </div>
    </div>
  );
}

export default About;
