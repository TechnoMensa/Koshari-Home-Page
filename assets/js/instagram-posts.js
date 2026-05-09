function loadInstagramEmbeds() {
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
}

fetch('/assets/data/instagram-posts.json')
    .then(res => res.json())
    .then(posts => {
        const template = document.getElementById('instagram-post-template');
        const container = document.querySelectorAll('#post-section .post-preview-container .column');
        let i = 0;
        posts.forEach(post => {
            const clone = template.content.cloneNode(true);

            const element1 = clone.querySelector('.instagram-media');

            element1.setAttribute('data-instgrm-permalink', post)

            container[i].appendChild(clone);
            i = (i + 1) % 2;
        });
        loadInstagramEmbeds();
    })
