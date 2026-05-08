document.querySelectorAll('[data-include]').forEach(async (el) => {
    const res = await fetch(el.getAttribute('data-include'));
    el.outerHTML = await res.text();
});
