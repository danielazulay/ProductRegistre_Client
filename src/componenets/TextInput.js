function TextInput(porps){

    return(
<div>
        <label htmlFor={porps.label}>{porps.label}</label>
        <input
            name={porps.name}
            value={porps.value}
            onChange={porps.onChange}
            type={porps.type}

        />
        </div>
    )

}

export default TextInput