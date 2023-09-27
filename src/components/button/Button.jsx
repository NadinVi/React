const Button = ({ onClick, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Button from child click!");
    onClick(event);
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export { Button };
