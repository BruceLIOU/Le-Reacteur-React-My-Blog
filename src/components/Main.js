const Main = (props) => {
  return (
    <div className="left">
      <div className={props.className}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Main;
