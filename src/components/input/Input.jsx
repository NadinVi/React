const Input = ({ onChange, defaultValue, onClick }) => {

	return (
		<input 
		defaultValue={defaultValue} 
		onChange={onChange} 
		onClick={onClick}>
		</input>
	);
}

export { Input };
