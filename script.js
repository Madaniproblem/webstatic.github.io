window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

const Icon = document.getElementById("icon");
const listNav = document.getElementById("list-nav");

Icon.addEventListener('click',() => {
    listNav.classList.toggle("hidden");
});

