async function loadPostPreviews() {
    const posts = [
        {
            "title": "Alpha 4.0 out now!",
            "description": "Check out the new towers, enemies, levels and other improvements, we added in this major release",
            "date": "21.06.2025",
            "image": "../assets/img/FeatureGraficSmall.png",
            "url": "#"
        }
    ];
    const template = document.getElementById('post-preview-template');
    const container = document.querySelector('#news-section .post-preview-container');

    posts.forEach(post => {
        const clone = template.content.cloneNode(true);

        const link = clone.querySelector('.post-link');
        const img = clone.querySelector('.thumbnail');
        const title = clone.querySelector('.post-title');
        const date = clone.querySelector('.post-date');
        const description = clone.querySelector('.post-description');

        link.href = post.url;
        img.src = post.image;
        img.alt = post.title;
        title.textContent = post.title;
        date.textContent = post.date;
        description.textContent = post.description;

        container.appendChild(clone);
    });
}

loadPostPreviews();
