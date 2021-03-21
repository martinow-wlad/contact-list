import { fadeIn, fadeOut } from "../../tools/fadeAnimation";
import ContactList from "../ContactList";

// constructor function for contact list instance.
// arguments: 
// * startPage(int)
// * contactsPerPage(int)
// * rootElementSelector(string)
// return {init,loadContacts}
function App (startPage=1, contactsPerPage=5, rootElementSelector='.contacts-list') {
    const state = {
        page: startPage,
        contactsPerPage: contactsPerPage,
        loading: true
    };

    const root = document.querySelector(rootElementSelector);
    const loader = document.querySelector('.loader');
    const loadMoreButton = document.querySelector('.contacts__load-more');
    
    // update loading property in state
    // arguments: 
    //  * loader(Element)
    // void
    const updateLoadingState = (loaderElement) => {
        if (!loader) return;
        state.loading ? fadeIn(loaderElement) : fadeOut(loaderElement);
        state.loading = !state.loading;
    }

    // load more button listener
    loadMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.loadContacts();
    });

    // method need only once in first call
    this.init = () => {
        this.loadContacts();
        fadeIn(loadMoreButton);
    }

    // method load conctact and insert into page
    this.loadContacts = async () => {
        // turn on loading
        updateLoadingState(loader);

        // getting list of contacts
        const contactList = await ContactList(state.page, state.contactsPerPage);

        if (contactList.length) {
            contactList.forEach(contact => {
                root.append(contact);
            });
            
            // update 
            state.page++;
        }

        // artificial timeout to make loader time around 1s.
        setTimeout(() => {
            updateLoadingState(loader);
        }, 500)
    }
}

export default App;