const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const goBack = () => {
    window.location = 'blogs.html';
}

if (!params.hasOwnProperty('b')) {
    goBack();
}

document.addEventListener("DOMContentLoaded", () => {
    const blog = blogs.find((b) => b.id == params.b);
    
    if (blog == undefined) goBack();

    const title = document.getElementById('blog-detail-title');
    const date = document.getElementById('blog-detail-date');
    const image = document.getElementById('blog-detail-image');
    const text = document.getElementById('blog-detail-text');

    title.innerHTML = blog.title;
    date.innerHTML = 'Publicado: ' + blog.datetime;
    if (!blog.hasVideo) {
        image.innerHTML = '<img src="' + blog.image + '" />';
    } else {
        image.innerHTML = '<video controls><source src="' + blog.video + '" type="video/mp4">Your browser does not support the video tag.</video>';
    }
    text.innerHTML = blog.text;
});