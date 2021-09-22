module.exports = {
    // User: {
    //     __resolveReference(user, { fetchUserById }){
    //         return fetchUserById(user.id)
    //     }
    // },
    Query: {
        whoami: require('./Query/whoami'),
    },
};
