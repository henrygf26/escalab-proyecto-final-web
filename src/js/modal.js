const modal = document.getElementById("work-modal");

const btnCloseModal = document.getElementById("close-modal");

workPopup = (id) => {
    console.log(modal.style.display)

    const ctg = document.getElementById('work-category');
    const img = document.getElementById('work-image');
    const title = document.getElementById('work-title');
    const desc = document.getElementById('work-description');
    const url = document.getElementById('work-url');

    const work = works.find((work) => work.id == id);
    
    img.innerHTML = '<img src="' + work.image + '" />';
    ctg.innerHTML = work.category;
    title.innerHTML = work.title;
    desc.innerHTML = work.description;
    url.href = work.url;

    modal.style.display = "block";
};

btnCloseModal.onclick = () => {
    modal.style.display = "none";
}