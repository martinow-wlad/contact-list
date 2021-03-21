// insert contact data into contact item markup
// arguments:
// * contact (object)
// return string
const getContactMarkup = (contact) => {
    const apiKey = "AIzaSyBCi0PW23gCa7uIFhm_lA0bLQkUvEIneM8";
    const {
        email, 
        name, 
        location, 
        picture, 
        cell
    } = contact;

    const {
        latitude,
        longitude
    } = location.coordinates;

    const queryForSearchMapLink =  `${latitude},${longitude}`;
    const shortName = `${name.title} ${name.last}`;
    const fullName = `${name.first} ${name.last}`;
    const address = `${location.street.number} ${location.street.name}, ${location.city}`;
    const contactPicture = picture.large ?? picture.medium ?? picture.thumbnail;

    const contactMarkup = `
        <h2 class="contacts-list__heading">${shortName} <span class="contacts-list__email">- ${email}</span></h2>
        <div class="contacts-list__content">
            <div class="contacts-list__presonal-data">
                ${contactPicture ? `<img src="${contactPicture}" class="contacts-list__image"/>` : ''}
                <address class="contacts-list__full-data">
                    <ul class="contacts-list__full-data__list">
                        <li>Full Name: ${fullName}</li>
                        <li>Address: <a href="https://www.google.com/maps/search/?api=1&query=${queryForSearchMapLink}" target="_blank">${address}</a></li>
                        <li>Email: <a href="mailto:${email}">${email}</a></li>
                        <li>Cell number: <a href="tel:${cell}">${cell}</a></li>
                    </ul>
                </address>
                <iframe class="contacts-list__map" loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${queryForSearchMapLink}&zoom=7"></iframe>
            </div>
            <div class="contacts-list__buttons">
                <a class="btn btn-primary" href="tel:${cell}">Call</a>
                <a class="btn btn-primary" href="mailto:${email}">Send E-mail</a>
            </div>
        </div>
    `;

    return contactMarkup;
}

export default getContactMarkup;