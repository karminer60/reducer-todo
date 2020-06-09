
import React, { useState, useReducer } from "react";

const List = () => {
    // const [title, setTitle] = useState('Hello earthlings!');
    // const [editing, setEditing] = useState(false);
    const [newTitleText, setNewTitleText] = useState("");

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

    return (
        <div>
            {!state.editing ? (
                <h1>
                    {state.title}{" "}
                    <i
                        onClick={() => dispatch({ type: "UPDATE_EDITING" })}
                        className="far fa-edit"
                    />
                </h1>
            ) : (
                    <div>
                        <input
                            className="title-input"
                            type="text"
                            name="newTitleText"
                            value={newTitleText}
                            onChange={handleChanges}
                        />
                        <button>Update title</button>
                    </div>
                )}
        </div>
    );
};

export default Title;