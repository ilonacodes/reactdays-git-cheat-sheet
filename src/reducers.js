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

                        return result.category.toLowerCase().includes(action.query.toLowerCase()) ||
                            result.description.toLowerCase().includes(action.query.toLowerCase()) ||
                            result.command.toLowerCase().includes(action.query.toLowerCase()) ||
                            result.keywords.map(keyword => keyword.toLowerCase())
                                .includes(action.query.toLowerCase())
                    })
                };


        default:
            return state;
    }
};