import React, { useState, useReducer } from "react";

export const initialState =
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}



export const reducer = (state, action) => {
    // build a case for each action type that could possibly be passed in tothe reducer
    // if (action.type === 'INCREMENT_YEAR') {
    //   return {
    //     ...state,
    //     year: state.year + 1
    //   }
    // } else if (action.type === 'UPDATE_MODEL') {
    //   // ?????
    //   // sometimes I create something here... const newItem
    //   return {
    //     ...state,
    //     model: action.payload
    //   }
    // } else {
    //   return state;
    // }

    // same as if, else if, ... , else
    switch (action.type) {
        case 'INCREMENT_YEAR':
            return {
                ...state,
                year: state.year + 1
            }
        case 'UPDATE_MODEL':
            return {
                ...state,
                model: action.payload
            }
        default:
            return state
    }
}



