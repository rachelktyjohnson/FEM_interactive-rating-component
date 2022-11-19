const rating_buttons = document.querySelector(".rating-buttons");
const section_form = document.querySelector("section.form");
const thank_you = document.querySelector("section.thank-you");
const submit_button = document.querySelector("#submit-btn");
const rating_summary = document.querySelector(".rating-summary");
const hint = document.querySelector(".hint");

let rating = null;

rating_buttons.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        [...document.querySelectorAll('.rating-buttons button')].map((element) => {
            element.classList.remove("selected");
        })
        e.target.classList.add("selected");
        rating = e.target.innerText;
    }
})

submit_button.addEventListener('click', () => {
    if (rating === null) {
        hint.style.display="block";
    } else {
        section_form.style.display = "none";
        thank_you.style.display = "flex";
        rating_summary.innerText = `You selected ${rating} out of 5`
    }

})