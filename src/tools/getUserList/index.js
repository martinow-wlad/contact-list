// get contact list
// arguments: 
// * startPage(int)
// * contactsPerPage(int)
// return {
//      success: boolean,
//      items: [contact] || []
// }
const getUserList = async (pageNumber = 1, resultsPerPage = 5) => {
    const result = {
        success: true,
        items: []
    }

    // getting data from API
    // try/catch just to be 100% sure that nothing crushed if something went wrong durring request
    try {
        const res = await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=${resultsPerPage}&seed=hashtagyou`);
        const data = await res.json();
        result.items = data.results;
    } catch (err) {
        result.success = false
    }

    return result;
}

export default getUserList;
