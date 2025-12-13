async function loadInstagramPosts() {
    const posts = [
        "https://www.instagram.com/p/DQt6Br1DQwK/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/DPbuUqbjdvJ/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/reel/DJuhtw_tmO9/?utm_source=ig_embed&amp;utm_campaign=loading"
    ];
    const template = document.getElementById('instagram-post-template');
    const container = document.querySelectorAll('#post-section .post-preview-container .column');
    let i = 0;
    posts.forEach(post => {
        const clone = template.content.cloneNode(true);

        const element1 = clone.querySelector('.instagram-media');
        const links = clone.querySelectorAll('.instagram-post-link');

        element1.setAttribute('data-instgrm-permalink', post)
        links[0].href = post
        links[1].href = post

        container[i].appendChild(clone);
        i = (i + 1) % 2;
    });
}

loadInstagramPosts();
