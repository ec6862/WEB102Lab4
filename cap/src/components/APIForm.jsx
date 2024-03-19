import React from "react";

const APIForm = ({inputs, handleChange, onSubmit}) => {
    return (
        <div>
            <h2>Select Your Image Attributes</h2>
            <form className="form-container">
                {inputs && Object.entries(inputs).map(([category, value], index) => (
                    <li className="form" key={index}>
                        <h2>{category}</h2>
                        <input
                            type="text"
                            name={category}
                            value={value}
                            placeholder="Input this attribute..."
                            onChange={handleChange}
                            className="textbook"
                        />
                        <br></br>
                        <br></br>
                        <p>{inputsInfo[index]}</p>
                    </li>
                ))}
            </form>
        </div>
    )
}

export default APIForm