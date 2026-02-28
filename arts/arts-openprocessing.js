// OpenProcessing 作品
const openProcessingArtworks = [
    {
        sketchId: "2866742",
        title: "Void",
        date: "2026/02/08"
    },
    {
        sketchId: "2866716",
        title: "Digital Signs",
        date: "2026/02/07"
    },
    {
        sketchId: "2860071",
        title: "SYSTEM_FAILURE: SUCCESSFUL",
        date: "2026/01/30"
    },
    {
        sketchId: "2858540",
        title: "Static Echoes",
        date: "2026/01/28"
    },
    {
        sketchId: "2856309",
        title: "The Rhythm of Ink Grids",
        date: "2026/01/26"
    },
    {
        sketchId: "2853824",
        title: "Slices of Midnight",
        date: "2026/01/22"
    },
    {
        sketchId: "2850331",
        title: "112358-OXOOX",
        date: "2026/01/18"
    },
    {
        sketchId: "2848595",
        title: "Becoming",
        date: "2026/01/15"
    },
    {
        sketchId: "2845160",
        title: "The Chaos Carnival",
        date: "2026/01/12"
    },
    {
        sketchId: "2832214",
        title: "I am a little monster",
        date: "2025/12/21"
    },
    {
        sketchId: "2817322",
        title: "Mosaic Portrait",
        date: "2025/12/05"
    },
    {
        sketchId: "2820466",
        title: "Pop Art Portrait2",
        date: "2025/12/08"
    },
    {
        sketchId: "2814256",
        title: "Pop Art Portrait",
        date: "2025/12/03"
    },
    {
        sketchId: "2793879",
        title: "Mandala of Elements",
        date: "2025/11/16"
    },
    {
        sketchId: "2782260",
        title: "Life",
        date: "2025/11/06"
    },
    {
        sketchId: "2775142",
        title: "Sunflower",
        date: "2025/10/31"
    },
    {
        sketchId: "2752444",
        title: "Coal Balls are talking",
        date: "2025/10/13"
    },
    {
        sketchId: "2737712",
        title: "Ripple",
        date: "2025/09/28"
    },
    {
        sketchId: "2729913",
        title: "The Mystic Score",
        date: "2025/09/20"
    },
    {
        sketchId: "2723191",
        title: "Cluster",
        date: "2025/09/15"
    },
    {
        sketchId: "2723146",
        title: "Blossom",
        date: "2025/09/15"
    }
];

// 生成 OpenProcessing 卡片的函數
function createOpenProcessingCard(artwork) {
    const thumbnailUrl = `https://kyoko.openprocessing.org/thumbnails/visualThumbnail${artwork.sketchId}@2x.jpg`;
    const sketchUrl = `https://openprocessing.org/sketch/${artwork.sketchId}`;

    return `
        <div class="col art-item" data-category="openprocessing">
            <div class="card mb-0">
                <a href="${sketchUrl}" class="text-decoration-none" target="_blank">
                    <div class="row position-absolute top-0 g-0 px-3 pt-4 z-index-0">
                        <div class="col-6 pe-0">
                            <img src="${thumbnailUrl}"
                                class="art-img art-img-left w-100" alt="${artwork.title}">
                        </div>
                        <div class="col-6 ps-0">
                            <img src="${thumbnailUrl}"
                                class="art-img art-img-right w-100" alt="${artwork.title}">
                        </div>
                    </div>
                    <img src="/my-page/arts/p5js圖模板.png" class="card-img-top z-index-1" alt="${artwork.title}">
                    <div class="card-body">
                        <h5 class="card-title">${artwork.title}</h5>
                        <small class="card-text text-muted">${artwork.date}</small>
                    </div>
                </a>
            </div>
        </div>
    `.trim();
}

// 渲染OpenProcessing作品到指定容器
function renderOpenProcessingArtworks(containerId = 'openprocessing-works') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 生成所有卡片的 HTML
    const cardsHTML = openProcessingArtworks.map(artwork => createOpenProcessingCard(artwork)).join('\n');

    // 將 OpenProcessing 作品插入到容器開頭（本地作品之前）
    container.insertAdjacentHTML('afterbegin', cardsHTML);
}

function setupArtCategoryFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const artItems = document.querySelectorAll('.art-item');

    if (!filterButtons.length || !artItems.length) return;

    function applyFilter(filterValue) {
        artItems.forEach((item) => {
            const category = item.dataset.category;
            const isVisible = filterValue === 'all' || category === filterValue;
            item.style.display = isVisible ? '' : 'none';
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filterValue = button.dataset.filter || 'all';

            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            applyFilter(filterValue);
        });
    });

    applyFilter('all');
}

// 頁面加載完成後渲染
document.addEventListener('DOMContentLoaded', function () {
    renderOpenProcessingArtworks();
    setupArtCategoryFilter();
});