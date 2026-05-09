fetch('/assets/data/posts.json')
    .then(res => res.json())
    .then(posts => {
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
            date.textContent = Intl.DateTimeFormat("de-DE").format(new Date(post.date));
            description.textContent = post.description;

            container.appendChild(clone);
        });
    })
