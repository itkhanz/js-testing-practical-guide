//Mocks and Spies
// import { generateReportData, storeData } from "./mocks-spies/data.js";
// import log from "./mocks-spies/util/logger.js";

// const data = generateReportData(log);
// storeData(data);

// More Mocking
import { extractPostData, savePost } from "./more-mocking/posts/posts";

const formElement = document.querySelector("form");

export async function submitFormHandler(event) {
    event.preventDefault();

    const formData = new FormData(formElement);
    try {
        const postData = extractPostData(formData);
        await savePost(postData);
    } catch (error) {
        showError(error.message);
    }
}

formElement.addEventListener("submit", submitFormHandler);
