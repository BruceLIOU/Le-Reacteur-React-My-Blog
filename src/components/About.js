const About = (props) => {
  return (
    <div className="right">
      <div className={props.className}>
        <h2>{props.title}</h2>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default About;
