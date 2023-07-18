function Header(props) {
  return (
    <header className="">
        <h1>Chaotic Creativity</h1>
        <p>{props.version}</p>
    </header>
  );
}

export default Header;