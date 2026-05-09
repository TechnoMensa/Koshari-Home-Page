document.querySelectorAll('include').forEach(async (el) => {
    const res = await fetch(el.getAttribute('src'));
    el.outerHTML = await res.text();
});