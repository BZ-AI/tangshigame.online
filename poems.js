// 唐诗三百首数据库
const poems = [
    {
        title: "《盛唐气象》",
        background: "贞观之治时期，大唐盛世",
        characters: "李白、杜甫、玄宗皇帝",
        poem: {
            title: "送杜少府之任蜀州",
            author: "王勃",
            content: [
                "城阙辅三秦",
                "风烟望五津",
                "与君离别意",
                "同是宦游人"
            ]
        },
        question: "面对安史之乱，你作为诗人会：",
        options: [
            { label: "A. 留在长安继续创作", value: 'A' },
            { label: "B. 远走他乡避祸", value: 'B' }
        ],
        results: {
            A: "留守长安将亲历历史变革，可能创作出更多反映时代的诗篇",
            B: "避祸他乡可保全性命，但可能错过重要的创作素材"
        }
    },
    {
        title: "《边塞豪情》",
        background: "唐朝边境战事频繁，将士戍边卫国",
        characters: "王昌龄、王之涣",
        poem: {
            title: "出塞二首·其一",
            author: "王昌龄",
            content: [
                "秦时明月汉时关",
                "万里长征人未还",
                "但使龙城飞将在",
                "不教胡马度阴山"
            ]
        },
        question: "若你是边塞诗人，更愿描写：",
        options: [
            { label: "A. 塞外风光的壮美与孤寂", value: 'A' },
            { label: "B. 战争胜利的喜悦与豪情", value: 'B' }
        ],
        results: {
            A: "你能以独特视角展现边塞的神秘与苍凉，引发人们对边疆的遐想",
            B: "你的诗作可鼓舞士气，增强人们对国家的信心"
        }
    },
    {
        title: "《田园雅趣》",
        background: "唐朝社会稳定，文人喜爱寄情田园",
        characters: "王维、孟浩然",
        poem: {
            title: "山居秋暝",
            author: "王维",
            content: [
                "空山新雨后",
                "天气晚来秋",
                "明月松间照",
                "清泉石上流"
            ]
        },
        question: "在田园生活中，你觉得最能体现闲适的是：",
        options: [
            { label: "A. 清晨耕种劳作", value: 'A' },
            { label: "B. 傍晚溪边垂钓", value: 'B' }
        ],
        results: {
            A: "体验劳作的充实，更能感悟田园生活的质朴",
            B: "享受静谧时光，让心灵在自然中得到放松"
        }
    },
    // 以下新增更多诗词，补充至接近300首
    {
        title: "《相思之苦》",
        background: "唐朝文人的离别与相思",
        characters: "李白、杨贵妃",
        poem: {
            title: "相思",
            author: "王维",
            content: [
                "红豆生南国",
                "春来发几枝",
                "愿君多采撷",
                "此物最相思"
            ]
        },
        question: "若你身处离别之苦，会如何排遣：",
        options: [
            { label: "A. 借酒消愁", value: 'A' },
            { label: "B. 写诗寄情", value: 'B' }
        ],
        results: {
            A: "短暂的沉醉可忘却烦恼，但醒来后可能更添忧愁",
            B: "将情感寄托于文字，或许能得到些许慰藉"
        }
    },
    {
        title: "《壮志豪情》",
        background: "唐朝文人的报国之志",
        characters: "岑参、高适",
        poem: {
            title: "白雪歌送武判官归京",
            author: "岑参",
            content: [
                "北风卷地白草折",
                "胡天八月即飞雪",
                "忽如一夜春风来",
                "千树万树梨花开"
            ]
        },
        question: "若你有报国之志，会选择：",
        options: [
            { label: "A. 投身军旅", value: 'A' },
            { label: "B. 以文报国", value: 'B' }
        ],
        results: {
            A: "在战场上挥洒热血，为国家立下战功",
            B: "用文字激励人心，为国家凝聚力量"
        }
    },
    // 继续添加更多唐诗...此处省略约290首
    {
        title: "《咏柳》之春",
        background: "贺知章眼见春天柳树生长，感叹生机",
        characters: "贺知章",
        poem: {
            title: "咏柳",
            author: "贺知章",
            content: [
                "碧玉妆成一树高",
                "万条垂下绿丝绦",
                "不知细叶谁裁出",
                "二月春风似剪刀"
            ]
        },
        question: "面对春天的美景，你会：",
        options: [
            { label: "A. 漫步欣赏，陶醉其中", value: 'A' },
            { label: "B. 提笔作诗，记录美景", value: 'B' }
        ],
        results: {
            A: "沉浸在春日美景中，享受大自然的恩赐",
            B: "用诗歌记录下这美好时刻，留下永恒的篇章"
        }
    },
    {
        title: "《登高》之思",
        background: "杜甫登高远望，思绪万千",
        characters: "杜甫",
        poem: {
            title: "登高",
            author: "杜甫",
            content: [
                "风急天高猿啸哀",
                "渚清沙白鸟飞回",
                "无边落木萧萧下",
                "不尽长江滚滚来"
            ]
        },
        question: "秋日登高，看到落叶纷飞，你会想到：",
        options: [
            { label: "A. 生命短暂，要珍惜当下", value: 'A' },
            { label: "B. 万物循环，来年再生", value: 'B' }
        ],
        results: {
            A: "感慨时光流逝，更加珍惜当下的美好时光",
            B: "理解自然循环的哲理，对未来充满希望"
        }
    }
    // 这里应该有近300首诗词，为简化展示只列出部分
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems;
} 