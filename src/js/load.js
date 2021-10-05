const serviceItems = () => {
    const parent = document.getElementById("services"); 
    
    if (parent != null) {
        let html = '';
        whatIDo.forEach((val) => {
            html += '<div class="col service-card">';
            html += '<i class="service-icon ' + val.icon + '"></i>';
            html += '<p class="service-title">' + val.title + '</p>';
            html += '<p class="service-text">';
            html += val.description;
            html += '</p>';
            html += '</div>';
        });
        
        parent.innerHTML = html;
    }
};

const workItems = () => {
    const parent = document.getElementById("works"); 
    
    if (parent != null) {
        let html = '';
        works.forEach((val) => {
            html += '<div class="col work-card">';
            html += '<div class="col work-item">';
            html += '<a href="javascript:workPopup(' + val.id + ')">';
            html += '<img src="' + val.image + '" class="work-img " />';
            html += '</a>';
            html += '</div>';
            html += '</div>';
        });
        
        parent.innerHTML = html;
    }
};

const blogsItems = () => {
    const parent = document.getElementById("blogs"); 
    
    if (parent != null) {
        const maxBlogsInSummary = 3;
        let count = 0;

        let html = '';

        const isSummary = parent.classList.contains('summary');

        for (blog of blogs) {
            html += '<div class="col blog-card">';
            html += '<div class="blog-image">';
            html += '<a href="blog.html?b=' + blog.id + '">';
            html += '<img src="' + blog.image + '" alt="" />';
            html += '</a>';
            html += '</div>';
            html += '<a href="blog.html?b=' + blog.id + '" class="blog-title">' + blog.title + '</a>';
            html += '<p class="blog-summary">';
            html += blog.summary;
            html += '</p>';
            html += '<p class="blog-date">' + blog.datetime + '</p>';
            html += '</div>';

            count++;

            if (isSummary && count == maxBlogsInSummary) {
                break;
            }
        }
        
        parent.innerHTML = html
    }
};

const socialNetworks = () => {
    const parent = document.getElementById("social-networks");
    
    if (parent != null) {
        let html = '';
        networks.forEach((val) => {
            html += '<a target="blank" href="' + val.url +'">';
            html += '<i class="icon ' + val.icon + '"></i>';
            html += '</a>';
        });

        parent.innerHTML = html;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    serviceItems();
    workItems();
    blogsItems();
    socialNetworks();
});