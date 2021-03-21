import getContactMarkup from "../../tools/getContactMarkup";
import slideToggle from "../../tools/toggler";

// make HTMLElement (contact item)
// arguments: 
// * contact(object)
// return HTMLElement
const ContactItem = (contact) => {
    const contactItem = document.createElement('div');

    contactItem.classList.add('contacts-list__item');

    // getting markup for contact item
    contactItem.innerHTML = getContactMarkup(contact);

    // add open/close listener for content item
    contactItem.addEventListener('click', (e) => {
        const heading = e.target.closest('.contacts-list__heading');
        if (heading) {
            const content = contactItem.querySelector('.contacts-list__content');
            slideToggle(content);
            contactItem.classList.toggle('open');
        }
    });

    return contactItem;
};

export default ContactItem;