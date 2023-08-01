function Button(props) {
  return (
    <button 
      onClick={props.onClick}
      className={`${props.children ? 'has-children' : ''}`}>
        {props.children ? props.children : props.text}
    </button>
  );
}

export default Button;