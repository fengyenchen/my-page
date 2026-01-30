// nft 作品
const nftworks = [
    {
        link: "https://www.editart.xyz/series/KT1X61CYzY6o98nBCHQR2iKx3A9FjSQ8Zg5o",
        title: "SYSTEM_FAILURE SUCCESSFUL",
        platform: "EditArt",
        date: "January 30 2026",
        editions: "24",
        describtion: "Genuary 30 2026 - Its not a bug, its a feature."
    },
    {
        link: "https://www.editart.xyz/series/KT1VrK8xoZskhjPvco2NxgPbuzBJDZbYC3BL",
        title: "Static Echoes",
        platform: "EditArt",
        date: "January 28 2026",
        editions: "24",
        describtion: "Genuary 28 2026 - No libraries, no canvas, only HTML elements."
    },
    {
        link: "https://www.editart.xyz/series/KT1VqhnwtcrJ7z5TgccGJ6KUc41w4wA7pjd9",
        title: "The Rhythm of Ink Grids",
        platform: "EditArt",
        date: "January 26 2026",
        editions: "24",
        describtion: "Genuary 26 2026 - Recursive Grids"
    },
    {
        link: "https://objkt.com/tokens/open_objkt/28072",
        title: "The (Dis)Ordered Score",
        platform: "Objkt",
        date: "January 18 2026",
        editions: "10",
        describtion: "Order or disorder?"
    },
    {
        link: "https://objkt.com/tokens/open_objkt/28030",
        title: "The (Dis)Ordered Garden",
        platform: "Objkt",
        date: "January 17 2026",
        editions: "10",
        describtion: "Order or disorder?"
    },
    {
        link: "https://objkt.com/tokens/open_objkt/27835",
        title: "The Chaos Carnival",
        platform: "Objkt",
        date: "January 14 2026",
        editions: "30",
        describtion: "A digital dream where abstract turbulence meets a playful parade of ghosts. \"The Chaos Carnival\" captures the energy of disorder, turning a storm of lines and colors into a festive gathering of strange creatures. In this world, chaos is the host, and every visitor is a unique fragment of a beautiful, unpredictable mystery."
    },
    {
        link: "https://akaswap.com/akaobj/27164",
        title: "Ripple",
        platform: "Akaswap",
        date: "January 13 2026",
        editions: "15",
        describtion: "This piece captures the transient beauty of a ripple frozen in time. Each circle acts as a pulse of energy, oscillating between chaos and order. What begins as a burst of intensity eventually dissolves into silence, mimicking the natural cycle of life."
    }
];

// 生成 nft 卡片的函數
function createNftCard(nftwork) {
    const thumbnailUrl = `https://fengyenchen.github.io/archive-storage/nft/${nftwork.title}.png`;

    return `
        <div class="col">
                <div class="card mb-0">
                    <a href="${nftwork.link}" class="text-decoration-none" target="_blank">
                        <div class="row g-2 align-items-center p-2">
                            <img src="${thumbnailUrl}"
                                class="nft-img col-sm-12 col-md-5 col-lg-3" alt="${nftwork.title}">
                            <div class="card-body col-sm-12 col-md-7 col-lg-9">
                                <h5 class="card-title">${nftwork.title}</h5>
                                <small class="card-text text-muted">
                                    <b>${nftwork.platform} | ${nftwork.date} | ${nftwork.editions} editions</b>
                                    <hr>
                                    <span>
                                        ${nftwork.describtion}
                                    </span>
                                </small>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
    `.trim();
}

// 渲染nft作品到指定容器
function renderNftnftworks(containerId = 'nft-works') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 生成所有卡片的 HTML
    const cardsHTML = nftworks.map(nftwork => createNftCard(nftwork)).join('\n');

    // 將 nft 作品放入容器
    container.innerHTML = cardsHTML;
}

// 頁面加載完成後渲染
document.addEventListener('DOMContentLoaded', function () {
    renderNftnftworks();
});