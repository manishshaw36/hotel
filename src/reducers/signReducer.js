const initialState = {
    roomsPlus: false,
    roomsMinus: true,
    adultsPlus: false,
    adultsMinus: true,
    childrenPlus: false,
    childrenMinus: true,
};

const signReducer =  ( state = initialState, action ) => {
    switch (action.type) {
        case 'ROOMSPLUS':
            state = {
                ...state,
                roomsPlus: action.payload
            }
            break;
        case 'ROOMSMINUS':
            state = {
                ...state,
                roomsMinus: action.payload
            }
            break;
        case 'ADULTSPLUS':
            state = {
                ...state,
                adultsPlus: action.payload
            }
            break;
        case 'ADULTSMINUS':
            state = {
                ...state,
                adultsMinus: action.payload
            }
            break;
        case 'CHILDRENPLUS':
            state = {
                ...state,
                childrenPlus: action.payload
            }
            break;
        case 'CHILDRENMINUS':
            state = {
                ...state,
                childrenMinus: action.payload
            }
            break;
        default:
            break;
    }
    return state;
};

export default signReducer;