const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.baseline}</p>
    </header>
  );
};

export default Header;
