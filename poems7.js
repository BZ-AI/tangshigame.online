// 唐诗三百首数据库 - 第七批
const poems7 = [
    {
        title: "《七步诗》之才",
        background: "曹植被迫七步成诗，展现才华",
        characters: "曹植、曹丕",
        poem: {
            title: "七步诗",
            author: "曹植",
            content: [
                "煮豆燃豆萁",
                "豆在釜中泣",
                "本是同根生",
                "相煎何太急"
            ]
        },
        question: "面对亲人之间的矛盾，你会：",
        options: [
            { label: "A. 直接表达，寻求解决", value: 'A' },
            { label: "B. 委婉暗示，等待转机", value: 'B' }
        ],
        results: {
            A: "勇敢面对问题，直接表达自己的感受，寻求有效解决",
            B: "用委婉的方式表达，避免冲突升级，等待适当时机解决"
        }
    },
    {
        title: "《赤壁》之怀",
        background: "杜牧追忆三国赤壁之战",
        characters: "杜牧、周瑜",
        poem: {
            title: "赤壁",
            author: "杜牧",
            content: [
                "折戟沉沙铁未销",
                "自将磨洗认前朝",
                "东风不与周郎便",
                "铜雀春深锁二乔"
            ]
        },
        question: "关于历史，你更感兴趣的是：",
        options: [
            { label: "A. 重大战役与政治变革", value: 'A' },
            { label: "B. 历史人物的情感与命运", value: 'B' }
        ],
        results: {
            A: "关注历史的宏大叙事，理解重大事件对历史进程的影响",
            B: "关注历史人物的个人故事，体会人性与命运的复杂性"
        }
    },
    {
        title: "《浪淘沙》之思",
        background: "刘禹锡对历史变迁的感慨",
        characters: "刘禹锡",
        poem: {
            title: "浪淘沙",
            author: "刘禹锡",
            content: [
                "九曲黄河万里沙",
                "浪淘风簸自天涯",
                "如今直上银河去",
                "同到牵牛织女家"
            ]
        },
        question: "面对人生变迁，你更愿意：",
        options: [
            { label: "A. 随波逐流，顺势而为", value: 'A' },
            { label: "B. 坚守初心，不改本色", value: 'B' }
        ],
        results: {
            A: "懂得随环境变化调整自己，展现适应性与灵活性",
            B: "坚持自己的原则和信念，保持内心的一致性"
        }
    },
    {
        title: "《秋词二首》之情",
        background: "李白抒发秋日情怀",
        characters: "李白",
        poem: {
            title: "秋词二首",
            author: "李白",
            content: [
                "自古逢秋悲寂寥",
                "我言秋日胜春朝",
                "晴空一鹤排云上",
                "便引诗情到碧霄"
            ]
        },
        question: "当主流观点与你的感受不同，你会：",
        options: [
            { label: "A. 坚持己见，表达独特看法", value: 'A' },
            { label: "B. 理解包容，尊重多元观点", value: 'B' }
        ],
        results: {
            A: "坚持自己的独特感受，不随波逐流，展现个性",
            B: "尊重多元观点，理解不同感受的合理性"
        }
    },
    {
        title: "《菊花》之逸",
        background: "黄巢在流亡途中写下对菊花的赞美",
        characters: "黄巢",
        poem: {
            title: "菊花",
            author: "黄巢",
            content: [
                "待到秋来九月八",
                "我花开后百花杀",
                "冲天香阵透长安",
                "满城尽带黄金甲"
            ]
        },
        question: "在不被看好的环境中，你更倾向于：",
        options: [
            { label: "A. 默默积蓄力量，等待时机", value: 'A' },
            { label: "B. 主动展现才华，证明自己", value: 'B' }
        ],
        results: {
            A: "像菊花一样耐心等待属于自己的季节，厚积薄发",
            B: "在逆境中展现自己的特长和能力，获得认可"
        }
    },
    {
        title: "《题西林壁》之道",
        background: "苏轼游览庐山，有感而发",
        characters: "苏轼",
        poem: {
            title: "题西林壁",
            author: "苏轼",
            content: [
                "横看成岭侧成峰",
                "远近高低各不同",
                "不识庐山真面目",
                "只缘身在此山中"
            ]
        },
        question: "看待问题时，你更注重：",
        options: [
            { label: "A. 跳出局限，寻求全局视角", value: 'A' },
            { label: "B. 深入细节，理解内在机制", value: 'B' }
        ],
        results: {
            A: "跳出局限看问题，获得更全面和客观的理解",
            B: "深入细节，从内部把握事物的本质和规律"
        }
    },
    {
        title: "《过故人庄》之友",
        background: "孟浩然探访老友，享受田园之乐",
        characters: "孟浩然、故人",
        poem: {
            title: "过故人庄",
            author: "孟浩然",
            content: [
                "故人具鸡黍",
                "邀我至田家",
                "绿树村边合",
                "青山郭外斜"
            ]
        },
        question: "与老朋友相聚，你更愿意：",
        options: [
            { label: "A. 享受简单饭菜和轻松氛围", value: 'A' },
            { label: "B. 安排特别活动和精致餐点", value: 'B' }
        ],
        results: {
            A: "享受与朋友间的简单相处，珍视自然真实的情感交流",
            B: "精心准备特别的聚会，表达对朋友的重视"
        }
    },
    {
        title: "《早春呈水部张十八员外》之诚",
        background: "韩愈向友人表达早春时节的喜悦",
        characters: "韩愈、张十八员外",
        poem: {
            title: "早春呈水部张十八员外",
            author: "韩愈",
            content: [
                "天街小雨润如酥",
                "草色遥看近却无",
                "最是一年春好处",
                "绝胜烟柳满皇都"
            ]
        },
        question: "发现美好事物时，你会：",
        options: [
            { label: "A. 主动分享，与人共赏", value: 'A' },
            { label: "B. 静静欣赏，独自体会", value: 'B' }
        ],
        results: {
            A: "乐于分享发现的美好，增进与他人的情感连接",
            B: "享受独自欣赏的宁静时刻，深入体会个人感受"
        }
    },
    {
        title: "《闻王昌龄左迁龙标遥有此寄》之惜",
        background: "李白得知友人王昌龄被贬，表达惋惜",
        characters: "李白、王昌龄",
        poem: {
            title: "闻王昌龄左迁龙标遥有此寄",
            author: "李白",
            content: [
                "杨花落尽子规啼",
                "闻道龙标过五溪",
                "我寄愁心与明月",
                "随风直到夜郎西"
            ]
        },
        question: "朋友遭遇不幸时，你倾向于：",
        options: [
            { label: "A. 直接伸出援手，提供帮助", value: 'A' },
            { label: "B. 表达关心，尊重对方空间", value: 'B' }
        ],
        results: {
            A: "积极主动地提供实际帮助，解决朋友的困难",
            B: "表达关心和支持，同时尊重朋友的个人空间"
        }
    },
    {
        title: "《梅花》之傲",
        background: "王安石赞美梅花不畏寒冬的品格",
        characters: "王安石",
        poem: {
            title: "梅花",
            author: "王安石",
            content: [
                "墙角数枝梅",
                "凌寒独自开",
                "遥知不是雪",
                "为有暗香来"
            ]
        },
        question: "面对逆境，你更看重：",
        options: [
            { label: "A. 坚强不屈的品格", value: 'A' },
            { label: "B. 适应变通的智慧", value: 'B' }
        ],
        results: {
            A: "像梅花一样，在逆境中保持坚韧不屈的品格",
            B: "懂得灵活应变，寻找最佳方式度过困难时期"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems7;
} 