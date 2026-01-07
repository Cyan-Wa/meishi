// shared.js - 所有页面共享的JavaScript

// 菜系数据
const cuisines = {
    sichuan: {
        name: "川菜",
        desc: "川菜是中国八大菜系之一，起源于四川地区，以麻辣、鱼香、怪味等独特口味著称。川菜讲究'一菜一格，百菜百味'，在中国烹饪史上占有重要地位。",
        dishes: ["麻婆豆腐", "宫保鸡丁", "夫妻肺片", "回锅肉", "水煮鱼", "毛血旺", "担担面", "口水鸡"]
    },
    cantonese: {
        name: "粤菜",
        desc: "粤菜即广东菜，是中国传统四大菜系之一，发源于岭南。粤菜由广州菜、潮州菜、东江菜三种地方风味组成，注重原料新鲜，追求原汁原味。",
        dishes: ["白切鸡", "烧鹅", "蜜汁叉烧", "清蒸石斑鱼", "老火靓汤", "肠粉", "虾饺", "叉烧包"]
    },
    shandong: {
        name: "鲁菜",
        desc: "鲁菜是八大菜系之首，起源于山东，历史最悠久、技法最丰富。鲁菜讲究原料质地优良，以盐提鲜，以汤壮鲜，调味讲求咸鲜纯正，突出本味。",
        dishes: ["糖醋鲤鱼", "九转大肠", "葱烧海参", "油爆双脆", "德州扒鸡", "四喜丸子", "锅塌豆腐", "坛子肉"]
    },
    jiangsu: {
        name: "苏菜",
        desc: "苏菜即江苏菜，起源于南北朝时期，以刀工精细、造型美观著称。苏菜注重本味，讲究火候，擅长炖、焖、蒸、炒，口味偏甜，造型精美。",
        dishes: ["松鼠鳜鱼", "盐水鸭", "狮子头", "大煮干丝", "叫花鸡", "无锡排骨", "水晶肴肉", "扬州炒饭"]
    },
    zhejiang: {
        name: "浙菜",
        desc: "浙菜即浙江菜，由杭州、宁波、绍兴和温州为代表的四个地方流派组成。浙菜选料讲究，烹饪独到，注重本味，制作精细，菜品形态精巧，口感鲜嫩。",
        dishes: ["西湖醋鱼", "东坡肉", "龙井虾仁", "宋嫂鱼羹", "叫化童鸡", "干炸响铃", "宁波汤圆", "荷叶粉蒸肉"]
    },
    fujian: {
        name: "闽菜",
        desc: "闽菜以烹制山珍海味而著称，在色香味形俱佳的基础上，尤以'香'、'味'见长，其清鲜、和醇、荤香、不腻的风格特色，以及汤路广泛的特点。",
        dishes: ["佛跳墙", "荔枝肉", "鸡汤氽海蚌", "淡糟香螺片", "醉排骨", "南煎肝", "闽南糊", "沙茶面"]
    },
    hunan: {
        name: "湘菜",
        desc: "湘菜即湖南菜，以湘江流域、洞庭湖区和湘西山区三种地方风味为主。湘菜制作精细，用料广泛，口味多变，品种繁多，注重香辣、酸辣、焦麻、香鲜。",
        dishes: ["剁椒鱼头", "毛氏红烧肉", "腊味合蒸", "永州血鸭", "东安子鸡", "辣椒炒肉", "口味虾", "臭豆腐"]
    },
    anhui: {
        name: "徽菜",
        desc: "徽菜起源于南宋时期的徽州府，擅长烧、炖、蒸，而爆、炒菜少，重油、重色、重火功。由于徽州地处山区，徽菜以烹制山珍野味著称。",
        dishes: ["臭鳜鱼", "毛豆腐", "胡适一品锅", "火腿炖甲鱼", "黄山炖鸽", "问政山笋", "徽州圆子", "中和汤"]
    }
};

// 视频数据
const videos = [
    {title: "川菜制作：麻婆豆腐", desc: "《舌尖上的中国》经典川菜制作过程", thumb:"2.jpg", url: "videos/sichuan.mp4"},
    {title: "粤菜制作：白切鸡", desc: "学习制作正宗广式白切鸡", thumb: "0.png", url: "videos/baizhanji.mp4"},
    {title: "浙菜制作：西湖醋鱼", desc: "展示浙菜经典西湖醋鱼的制作过程", thumb: "3.png", url: "videos/xihu.mp4"},
    {title: "苏菜制作：松鼠鳜鱼", desc: "江南名菜松鼠鳜鱼的精致制作", thumb: "苏菜.jpg", url: "videos/33.mp4"},
    {title: "湘菜制作：剁椒鱼头", desc: "湖南特色菜剁椒鱼头的制作方法", thumb: "湘菜.jpg", url: "videos/31.mp4"},
    {title: "徽菜制作：臭鳜鱼", desc: "安徽特色菜臭鳜鱼的独特风味", thumb: "1.jpg", url: "videos/32.mp4"}
];

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // 滚动动画
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.remove('opacity-0');
        }
    });
});

// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// 搜索功能
const searchBox = document.querySelector('.search-box');
const searchResults = document.getElementById('searchResults');

if (searchBox && searchResults) {
    searchBox.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        let results = [];
        
        // 搜索菜系
        for (const [id, cuisine] of Object.entries(cuisines)) {
            if (cuisine.name.toLowerCase().includes(query) || 
                cuisine.desc.toLowerCase().includes(query)) {
                results.push({
                    type: '菜系',
                    name: cuisine.name,
                    desc: `点击查看${cuisine.name}详细介绍`,
                    action: () => {
                        window.location.href = `cuisines.html#${id}`;
                    }
                });
            }
            
            // 搜索菜品
            cuisine.dishes.forEach(dish => {
                if (dish.toLowerCase().includes(query)) {
                    results.push({
                        type: '菜品',
                        name: dish,
                        desc: `来自${cuisine.name}的代表菜品`,
                        action: () => {
                            window.location.href = `cuisines.html#${id}`;
                        }
                    });
                }
            });
        }
        
        // 显示搜索结果
        if (results.length > 0) {
            searchResults.innerHTML = '';
            results.slice(0, 5).forEach(result => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <h4>${result.name} <span style="font-size: 0.8rem; background-color: #eee; padding: 2px 8px; border-radius: 10px;">${result.type}</span></h4>
                    <p>${result.desc}</p>
                `;
                item.addEventListener('click', () => {
                    result.action();
                    searchResults.style.display = 'none';
                    searchBox.value = '';
                });
                searchResults.appendChild(item);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item"><p>未找到相关结果</p></div>';
            searchResults.style.display = 'block';
        }
    });
}

// 点击页面其他地方关闭搜索结果
document.addEventListener('click', function(event) {
    if (searchBox && searchResults && !searchBox.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});

// 视频播放功能
function playVideo(title, url) {
    const modal = document.getElementById('videoModal');
    const videoTitle = document.getElementById('videoTitle');
    const videoContainer = document.querySelector('.video-container');
    
    if (!modal || !videoTitle || !videoContainer) return;
    
    videoTitle.textContent = title;
    
    // 判断是本地视频还是在线视频
    if (url.includes('.mp4') || url.includes('.webm')) {
        videoContainer.innerHTML = `
            <video controls autoplay style="width:100%; max-height:70vh; border-radius:10px;">
                <source src="${url}" type="video/mp4">
                您的浏览器不支持视频播放
            </video>
        `;
    } else {
        videoContainer.innerHTML = `
            <iframe src="${url}" title="${title}" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen style="width: 100%; aspect-ratio: 16/9; border-radius: 10px;">
            </iframe>
        `;
    }
    
    modal.style.display = 'flex';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    if (!modal) return;
    
    modal.style.display = 'none';
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.innerHTML = '';
    }
}

// 地图标记点交互
document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const region = this.getAttribute('data-region');
        // 跳转到对应菜系页面
        if (region === "四川") window.location.href = "cuisines.html#sichuan";
        else if (region === "广东") window.location.href = "cuisines.html#cantonese";
        else if (region === "江苏") window.location.href = "cuisines.html#jiangsu";
        else if (region === "山东") window.location.href = "cuisines.html#shandong";
        else if (region === "湖南") window.location.href = "cuisines.html#hunan";
        else if (region === "浙江") window.location.href = "cuisines.html#zhejiang";
    });
});

// 初始化滚动动画
window.dispatchEvent(new Event('scroll'));