export const t = {
    SEARCH_QUERY: 'SEARCH_QUERY'
};

export const actions = {
    searchQuery: query => ({
        type: t.SEARCH_QUERY,
        query
    })
};