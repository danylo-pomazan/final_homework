import "../assets/css/button.css";

function Button(props) {
  return (
    <button className="button" style={{ width: `${props.width}px` }}>
      {props.text}
    </button>
  );
}

export default Button;
