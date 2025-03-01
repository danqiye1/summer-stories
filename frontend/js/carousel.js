document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('[data-slide="prev"]');
    const nextButton = carousel.querySelector('[data-slide="next"]');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextItem() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        nextItem();
    });

    // Auto-rotate carousel every 5 seconds
    setInterval(nextItem, intervalTime);

    showItem(currentIndex);
});