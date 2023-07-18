function Generator(props) {

  const array = props.array;

  let selectedItem = array[Math.floor(Math.random() * array.length)];

  return (
    <div className="">
        <h2>{selectedItem}</h2>
    </div>
  );
}

export default Generator;