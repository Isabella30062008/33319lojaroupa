function showContent(style) {
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
        item.style.display = 'none';
    });

    const activeContent = document.getElementById(style);
    activeContent.style.display = 'block';
}
