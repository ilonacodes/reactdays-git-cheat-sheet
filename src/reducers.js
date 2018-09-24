import {data} from './data';
import {t} from './actions';

const initState = {
    allData: data,
    searchResults: data
};

export const gitCheatReducer = (state = initState, action) => {
    switch (action.type) {
        case t.SEARCH_QUERY:
            console.log(state.allData);
            console.log(action);
            return { ...state,
                    searchResults: state.allData.filter(result => {

                        return result.category.includes(action.query) ||
                            result.description.includes(action.query) ||
                            result.command.includes(action.query) ||
                            result.keywords.includes(action.query)
                    })
                };


        default:
            return state;
    }
};