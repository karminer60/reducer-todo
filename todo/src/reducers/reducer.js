
export const initialState = [
    {
      item: "Finish Assignment",
      id: 123,
      completed: false
    },
    {
      item: "Clean room",
      id: 124,
      completed: false
    },
    {
      item: "Go grocery shopping",
      id: 1235,
      completed: false
    },
    {
      item: "Read book",
      id: 1246,
      completed: false
    },
    {
      item: "Make dinner",
      id: 1237,
      completed: false
    },
    {
      item: "Clean bathroom",
      id: 1248,
      completed: false
    }
  ];




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
        case 'ADD':
            return [
                ...state,
                {item: action.item}
            ]
        case 'UPDATE_MODEL':
            return {
                ...state,
                model: action.payload
            }
        default:
            return state
    }
}



