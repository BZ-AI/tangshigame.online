/**
 * 唐诗三百首策略游戏 - 主脚本
 */

// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 初始化模态框
    initModals();
    
    // 初始化公告
    initAnnouncement();
    
    // 初始化角色轮播
    initCarousel();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 初始化语言切换
    initLanguageSwitcher();
    
    // 音效和动画功能
    const soundEffects = {
        click: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-click-tone-1112.mp3'),
        correct: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3'),
        wrong: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-tone-2974.mp3'),
        victory: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3'),
        defeat: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sad-game-over-trombone-471.mp3'),
        countdown: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3')
    };

    // 是否启用音效
    let soundEnabled = true;

    // 播放音效函数
    function playSound(sound) {
        if (soundEnabled && soundEffects[sound]) {
            soundEffects[sound].currentTime = 0;
            soundEffects[sound].play().catch(e => console.log("音频播放失败:", e));
        }
    }

    // 添加动画效果
    function addAnimation(element, animationClass, callback) {
        if (!element) return;
        
        element.classList.add(animationClass);
        
        element.addEventListener('animationend', function handler() {
            element.classList.remove(animationClass);
            element.removeEventListener('animationend', handler);
            
            if (typeof callback === 'function') {
                callback();
            }
        });
    }

    // 在移动设备上切换菜单
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            playSound('click');
        });
    }
    
    // 音效切换按钮
    const soundToggleBtn = document.createElement('button');
    soundToggleBtn.className = 'sound-toggle';
    soundToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    document.body.appendChild(soundToggleBtn);
    
    soundToggleBtn.addEventListener('click', function() {
        soundEnabled = !soundEnabled;
        this.innerHTML = soundEnabled ? 
            '<i class="fas fa-volume-up"></i>' : 
            '<i class="fas fa-volume-mute"></i>';
        playSound('click');
    });
    
    // 为所有按钮添加点击音效
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || 
            e.target.classList.contains('btn') || 
            e.target.classList.contains('answer-option') ||
            e.target.classList.contains('character')) {
            playSound('click');
        }
    });
    
    // 检查页面类型并添加相应功能
    if (window.location.pathname.includes('game.html')) {
        enhanceGamePage();
    }
    
    // 初始化AOS动画库
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out'
        });
    }
});

/**
 * 初始化登录和注册模态框
 */
function initModals() {
    // 获取模态框元素
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeButtons = document.querySelectorAll('.close-modal');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    
    // 打开登录模态框
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });
    }
    
    // 打开注册模态框
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            registerModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // 关闭模态框
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = '';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // 切换到注册模态框
    if (switchToRegister) {
        switchToRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'flex';
        });
    }
    
    // 切换到登录模态框
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
    }
    
    // 处理登录表单提交
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            
            // 这里应该有实际的登录逻辑，现在只是演示
            console.log('登录信息:', { username, password });
            
            // 模拟登录成功
            alert('登录成功！');
            loginModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // 处理注册表单提交
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            // 简单的密码匹配验证
            if (password !== confirmPassword) {
                alert('两次输入的密码不匹配！');
                return;
            }
            
            // 这里应该有实际的注册逻辑，现在只是演示
            console.log('注册信息:', { username, email, password });
            
            // 模拟注册成功
            alert('注册成功！请登录您的账号。');
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
    }
}

/**
 * 初始化公告区域
 */
function initAnnouncement() {
    const announcement = document.querySelector('.announcement');
    const closeButton = document.querySelector('.announcement-close');
    
    if (announcement && closeButton) {
        // 检查公告是否已经关闭（使用localStorage存储状态）
        const isAnnouncementClosed = localStorage.getItem('announcementClosed');
        
        if (isAnnouncementClosed) {
            announcement.style.display = 'none';
        } else {
            // 稍微延迟显示公告，以便页面加载完成
            setTimeout(() => {
                announcement.style.display = 'flex';
            }, 1000);
        }
        
        // 添加关闭事件
        closeButton.addEventListener('click', function() {
            announcement.style.display = 'none';
            // 存储公告已关闭状态，有效期1天
            const now = new Date();
            const expiry = now.getTime() + 24 * 60 * 60 * 1000; // 1天
            localStorage.setItem('announcementClosed', expiry);
        });
        
        // 检查存储的时间是否过期
        const now = new Date();
        if (isAnnouncementClosed && now.getTime() > parseInt(isAnnouncementClosed)) {
            localStorage.removeItem('announcementClosed');
            announcement.style.display = 'flex';
        }
    }
}

/**
 * 初始化角色轮播
 */
function initCarousel() {
    const carousel = document.querySelector('.character-carousel');
    const cards = document.querySelectorAll('.character-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (carousel && cards.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        const cardWidth = cards[0].offsetWidth;
        const cardMargin = 30; // 根据CSS中的gap值
        const maxIndex = cards.length - 1;
        
        // 更新轮播位置
        function updateCarousel() {
            // 在小屏幕上不进行轮播，让卡片自动换行
            if (window.innerWidth <= 1024) return;
            
            cards.forEach((card, index) => {
                if (index === currentIndex) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(-10px)';
                } else {
                    card.style.opacity = '0.7';
                    card.style.transform = 'translateY(0)';
                }
            });
        }
        
        // 初始化轮播状态
        updateCarousel();
        
        // 上一个按钮
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
            updateCarousel();
        });
        
        // 下一个按钮
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
            updateCarousel();
        });
        
        // 自动轮播
        let autoplayInterval = setInterval(function() {
            currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 5000);
        
        // 鼠标悬停时暂停自动轮播
        carousel.addEventListener('mouseenter', function() {
            clearInterval(autoplayInterval);
        });
        
        // 鼠标离开时恢复自动轮播
        carousel.addEventListener('mouseleave', function() {
            autoplayInterval = setInterval(function() {
                currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
                updateCarousel();
            }, 5000);
        });
        
        // 窗口大小变化时重新计算
        window.addEventListener('resize', updateCarousel);
    }
}

/**
 * 初始化滚动动画
 */
function initScrollAnimations() {
    // 获取所有需要添加动画的元素
    const animatedElements = document.querySelectorAll(
        '.feature-card, .mode-card, .character-card, .testimonial-card, .subscription-plan'
    );
    
    // 检查元素是否在视口中
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // 添加滚动动画类
    function handleScrollAnimation() {
        animatedElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('animated');
            }
        });
    }
    
    // 初始检查
    handleScrollAnimation();
    
    // 滚动时检查
    window.addEventListener('scroll', handleScrollAnimation);
}

/**
 * 初始化语言切换
 */
function initLanguageSwitcher() {
    const languageSelect = document.getElementById('languageSelect');
    
    if (languageSelect) {
        // 获取保存的语言设置，如果没有则默认中文
        const savedLanguage = localStorage.getItem('language') || 'zh';
        languageSelect.value = savedLanguage;
        
        // 设置页面语言
        document.documentElement.lang = savedLanguage;
        
        // 语言切换事件
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            localStorage.setItem('language', selectedLanguage);
            
            // 在实际应用中，这里应该加载不同语言的内容
            // 现在只是简单地刷新页面
            window.location.reload();
        });
    }
}

/**
 * 验证表单字段
 * @param {HTMLElement} field - 表单字段元素
 * @param {Function} validationFn - 验证函数
 * @returns {boolean} - 验证结果
 */
function validateField(field, validationFn) {
    const value = field.value.trim();
    const isValid = validationFn(value);
    
    if (!isValid) {
        field.classList.add('invalid');
    } else {
        field.classList.remove('invalid');
    }
    
    return isValid;
}

/**
 * 添加视差滚动效果
 */
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        // 对具有视差效果的元素应用变换
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.5;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

// 如果存在WebGL支持，初始化一些高级视觉效果
if (window.WebGLRenderingContext) {
    // 这里可以添加使用Three.js等库的高级视觉效果
    console.log('WebGL支持可用，可以添加高级视觉效果');
}

// 增强游戏页面功能
function enhanceGamePage() {
    const answerOptions = document.querySelectorAll('.answer-option');
    const characters = document.querySelectorAll('.character');
    const resultTitle = document.getElementById('resultTitle');
    const gameTimer = document.getElementById('gameTimer');
    
    // 绑定选择题答案事件
    answerOptions.forEach(option => {
        option.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            
            if (isCorrect) {
                playSound('correct');
                addAnimation(this, 'correct-answer');
            } else {
                playSound('wrong');
                addAnimation(this, 'wrong-answer');
                
                // 显示正确答案
                answerOptions.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        setTimeout(() => {
                            addAnimation(opt, 'show-correct');
                        }, 500);
                    }
                });
            }
        });
    });
    
    // 绑定填空字符选择事件
    characters.forEach(char => {
        char.addEventListener('click', function() {
            addAnimation(this, 'character-selected');
            
            const targetId = this.getAttribute('data-target');
            const targetBlank = document.getElementById(targetId);
            
            if (targetBlank) {
                addAnimation(targetBlank, 'blank-filled');
            }
        });
    });
    
    // 增强游戏结果显示
    if (resultTitle) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'characterData' || mutation.type === 'childList') {
                    if (resultTitle.textContent.includes('成功') || resultTitle.textContent.includes('胜利')) {
                        playSound('victory');
                    } else {
                        playSound('defeat');
                    }
                }
            });
        });
        
        observer.observe(resultTitle, { 
            characterData: true, 
            childList: true,
            subtree: true 
        });
    }
    
    // 为计时器添加最后10秒倒计时音效
    if (gameTimer) {
        const timerObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'characterData' || mutation.type === 'childList') {
                    const timeValue = parseInt(gameTimer.textContent);
                    if (timeValue <= 10 && timeValue > 0) {
                        playSound('countdown');
                        addAnimation(gameTimer, 'timer-warning');
                    }
                }
            });
        });
        
        timerObserver.observe(gameTimer, { 
            characterData: true, 
            childList: true,
            subtree: true 
        });
    }
    
    // 添加更多游戏挑战数据
    loadMoreChallenges();
}

// 加载更多游戏挑战数据
function loadMoreChallenges() {
    const multipleChoiceChallenges = [
        {
            title: "《登鹳雀楼》",
            author: "王之涣",
            content: "白日依山尽，黄河入海流。<br>欲穷千里目，更上一层楼。",
            question: "这首诗描述的是什么场景？",
            options: [
                { text: "登高望远", correct: true },
                { text: "思念家乡", correct: false },
                { text: "送别友人", correct: false },
                { text: "描写春天", correct: false }
            ]
        },
        {
            title: "《望庐山瀑布》",
            author: "李白",
            content: "日照香炉生紫烟，遥看瀑布挂前川。<br>飞流直下三千尺，疑是银河落九天。",
            question: "这首诗中将瀑布比作什么？",
            options: [
                { text: "银河", correct: true },
                { text: "白练", correct: false },
                { text: "玉龙", correct: false },
                { text: "珍珠", correct: false }
            ]
        },
        {
            title: "《望岳》",
            author: "杜甫",
            content: "岱宗夫如何？齐鲁青未了。<br>造化钟神秀，阴阳割昏晓。",
            question: "这首诗描写的是哪座山？",
            options: [
                { text: "泰山", correct: true },
                { text: "华山", correct: false },
                { text: "黄山", correct: false },
                { text: "嵩山", correct: false }
            ]
        }
    ];
    
    const fillBlankChallenges = [
        {
            title: "《枫桥夜泊》",
            author: "张继",
            content: "月落乌啼霜满天，江枫渔火对愁眠。<br>姑苏城外_____，_____。",
            blanks: [
                { id: "blank1", correct: ["寒山寺"] },
                { id: "blank2", correct: ["夜半钟声到客船"] }
            ],
            options: ["寒", "山", "寺", "夜", "半", "钟", "声", "到", "客", "船", "楼", "月"]
        },
        {
            title: "《黄鹤楼》",
            author: "崔颢",
            content: "昔人已乘黄鹤去，此地空余黄鹤楼。<br>黄鹤一去不复返，_____。",
            blanks: [
                { id: "blank1", correct: ["白云千载空悠悠"] }
            ],
            options: ["白", "云", "千", "载", "空", "悠", "悠", "飞", "高", "万", "里", "长"]
        }
    ];
    
    // 将挑战数据保存到全局变量中，供游戏使用
    window.gameChallenges = {
        multipleChoice: multipleChoiceChallenges,
        fillBlank: fillBlankChallenges
    };
}

// 添加CSS类用于动画
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes correct-answer {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); background-color: #2ecc71; }
        100% { transform: scale(1); }
    }
    
    @keyframes wrong-answer {
        0% { transform: scale(1); }
        25% { transform: translateX(-5px); background-color: #e74c3c; }
        50% { transform: translateX(5px); background-color: #e74c3c; }
        75% { transform: translateX(-5px); background-color: #e74c3c; }
        100% { transform: scale(1); }
    }
    
    @keyframes show-correct {
        0% { background-color: white; }
        100% { background-color: #2ecc71; color: white; }
    }
    
    @keyframes character-selected {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); background-color: #3498db; color: white; }
        100% { transform: scale(1); }
    }
    
    @keyframes blank-filled {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); border-color: #3498db; }
        100% { transform: scale(1); }
    }
    
    @keyframes timer-warning {
        0% { color: #8B4513; }
        50% { color: #e74c3c; transform: scale(1.1); }
        100% { color: #8B4513; }
    }
    
    .sound-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(139, 69, 19, 0.7);
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    
    .sound-toggle:hover {
        background: rgba(139, 69, 19, 0.9);
    }
    
    .correct-answer {
        animation: correct-answer 0.6s ease;
    }
    
    .wrong-answer {
        animation: wrong-answer 0.6s ease;
    }
    
    .show-correct {
        animation: show-correct 0.5s ease forwards;
    }
    
    .character-selected {
        animation: character-selected 0.4s ease;
    }
    
    .blank-filled {
        animation: blank-filled 0.4s ease;
    }
    
    .timer-warning {
        animation: timer-warning 0.5s ease;
    }
`;
document.head.appendChild(styleSheet); 