import { packs } from "../../resources/utils/deckbuilder";

function Menu(props) {
  

  return (
    <ul className="">
      {Object.values(packs).map((pack, index) => {
        return <li key={index}>{pack.name}</li>
      })}
    </ul>
  );
}

export default Menu;