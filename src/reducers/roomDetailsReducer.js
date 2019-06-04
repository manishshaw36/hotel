const initialState = {
    rooms: 1,
    adults: 1,
    children: 0
};

const roomDetailsReducer =  ( state = initialState, action ) => {
    switch (action.type) {
        case 'ROOMS':
            state = {
                ...state,
                rooms: action.payload
            };
            break;
        case 'ADULTS':
            state = {
                ...state,
                adults: action.payload
            };
            break;
        case 'CHILDREN':
            state = {
                ...state,
                children: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default roomDetailsReducer;