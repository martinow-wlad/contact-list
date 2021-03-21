import getUserList from "../../tools/getUserList";
import ContactItem from "../ContactItem";

// get contact list array
// arguments: 
// * page(int)
// * contactNumber(int)
// return [HTMLElement] || []
const ContactList = async (page = 1, contactNumber = 5) => {
    const contactListData = await getUserList(page, contactNumber);

    const contacts = contactListData.success ? contactListData.items.map(user => ContactItem(user)) : [];

    return contacts;
}

export default ContactList;