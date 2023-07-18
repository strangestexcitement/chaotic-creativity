function Header(props) {
  return (
    <header className="">
        <h1>Chaotic Creativity</h1>
        <p>Version {props.version}</p>
    </header>
  );
}

export default Header;