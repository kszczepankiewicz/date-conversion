const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

const formatDateMMDDYYYY = dateObj => `Formatted Date (MM/DD/YYYY): ${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`

const formatDateLong = dateObj => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return `Formatted Date (Month Day, Year): ${dateObj.toLocaleDateString("en-US", options)}`
}

console.log(currentDateFormat);