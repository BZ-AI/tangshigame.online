// 唐诗三百首数据库 - 第四批
const poems4 = [
    {
        title: "《闻王昌龄左迁龙标远有此寄》之忧",
        background: "李白得知好友王昌龄被贬，心中忧伤",
        characters: "李白、王昌龄",
        poem: {
            title: "闻王昌龄左迁龙标远有此寄",
            author: "李白",
            content: [
                "杨花落尽子规啼",
                "闻道龙标过五溪",
                "我寄愁心与明月",
                "随风直到夜郎西"
            ]
        },
        question: "当好友遭遇不幸，你会：",
        options: [
            { label: "A. 设法提供实际帮助", value: 'A' },
            { label: "B. 给予精神上的支持", value: 'B' }
        ],
        results: {
            A: "尝试用实际行动帮助朋友度过难关",
            B: "在精神上支持朋友，与其同甘共苦"
        }
    },
    {
        title: "《渔歌子》之乐",
        background: "张志和描写渔夫的闲适生活",
        characters: "张志和、渔夫",
        poem: {
            title: "渔歌子",
            author: "张志和",
            content: [
                "西塞山前白鹭飞",
                "桃花流水鳜鱼肥",
                "青箬笠",
                "绿蓑衣"
            ]
        },
        question: "关于生活方式，你更倾向于：",
        options: [
            { label: "A. 简单自然，远离尘嚣", value: 'A' },
            { label: "B. 积极进取，追求成就", value: 'B' }
        ],
        results: {
            A: "选择简单自然的生活，享受闲适与自由",
            B: "追求事业上的成就，实现自我价值"
        }
    },
    {
        title: "《游子吟》之爱",
        background: "孟郊描写母爱的伟大与深沉",
        characters: "孟郊、母亲",
        poem: {
            title: "游子吟",
            author: "孟郊",
            content: [
                "慈母手中线",
                "游子身上衣",
                "临行密密缝",
                "意恐迟迟归"
            ]
        },
        question: "离家在外时，你会如何与家人联系：",
        options: [
            { label: "A. 经常通话，分享生活点滴", value: 'A' },
            { label: "B. 重要节日必联系，平时较少", value: 'B' }
        ],
        results: {
            A: "保持频繁联系，让家人了解你的生活状况，减少他们的担忧",
            B: "尊重各自的生活节奏，在重要时刻表达关心"
        }
    },
    {
        title: "《题临安邸》之叹",
        background: "林升对靖康之变后南宋小朝廷的感慨",
        characters: "林升、宋高宗",
        poem: {
            title: "题临安邸",
            author: "林升",
            content: [
                "山外青山楼外楼",
                "西湖歌舞几时休",
                "暖风熏得游人醉",
                "直把杭州作汴州"
            ]
        },
        question: "面对国家危难，作为普通人，你会：",
        options: [
            { label: "A. 积极参与，尽己所能", value: 'A' },
            { label: "B. 保全自身，等待时机", value: 'B' }
        ],
        results: {
            A: "尽自己的一份力量，为国家的复兴贡献力量",
            B: "保存实力，等待合适的时机再行动"
        }
    },
    {
        title: "《鹿柴》之静",
        background: "王维在山林中独处，感受宁静",
        characters: "王维",
        poem: {
            title: "鹿柴",
            author: "王维",
            content: [
                "空山不见人",
                "但闻人语响",
                "返景入深林",
                "复照青苔上"
            ]
        },
        question: "在自然环境中，你更注重：",
        options: [
            { label: "A. 视觉享受，欣赏美景", value: 'A' },
            { label: "B. 听觉体验，感受声音", value: 'B' }
        ],
        results: {
            A: "通过视觉感受大自然的美丽，留下美好的记忆",
            B: "倾听大自然的声音，感受不同的听觉体验"
        }
    },
    {
        title: "《钱塘湖春行》之美",
        background: "白居易春日游览钱塘湖，感受春光美好",
        characters: "白居易",
        poem: {
            title: "钱塘湖春行",
            author: "白居易",
            content: [
                "孤山寺北贾亭西",
                "水面初平云脚低",
                "几处早莺争暖树",
                "谁家新燕啄春泥"
            ]
        },
        question: "春游时，你更喜欢：",
        options: [
            { label: "A. 热闹的景点，感受人气", value: 'A' },
            { label: "B. 幽静的地方，享受安宁", value: 'B' }
        ],
        results: {
            A: "在热闹的环境中感受春天的活力与欢乐",
            B: "在安静的环境中细细品味春天的美好"
        }
    },
    {
        title: "《枫桥夜泊》之愁",
        background: "张继夜泊枫桥，听寺院钟声",
        characters: "张继",
        poem: {
            title: "枫桥夜泊",
            author: "张继",
            content: [
                "月落乌啼霜满天",
                "江枫渔火对愁眠",
                "姑苏城外寒山寺",
                "夜半钟声到客船"
            ]
        },
        question: "夜晚难眠时，你会选择：",
        options: [
            { label: "A. 起身做些事情转移注意力", value: 'A' },
            { label: "B. 静静躺着，等待睡意来临", value: 'B' }
        ],
        results: {
            A: "通过活动转移注意力，缓解失眠的焦虑",
            B: "保持平静的心态，顺其自然地等待睡意"
        }
    },
    {
        title: "《回乡偶书》之归",
        background: "贺知章老年回到家乡，感慨世事变迁",
        characters: "贺知章",
        poem: {
            title: "回乡偶书",
            author: "贺知章",
            content: [
                "少小离家老大回",
                "乡音无改鬓毛衰",
                "儿童相见不相识",
                "笑问客从何处来"
            ]
        },
        question: "长期离家后回乡，你最关注：",
        options: [
            { label: "A. 家乡的变化与发展", value: 'A' },
            { label: "B. 亲友的近况与变化", value: 'B' }
        ],
        results: {
            A: "关注家乡的发展变化，感受时代的进步",
            B: "关心亲友的生活状况，重拾人际联系"
        }
    },
    {
        title: "《长干行》之情",
        background: "崔颢描写夫妻之间的深厚感情",
        characters: "崔颢、妻子",
        poem: {
            title: "长干行",
            author: "崔颢",
            content: [
                "君家何处住",
                "妾住在横塘",
                "停船暂借问",
                "或恐是同乡"
            ]
        },
        question: "在爱情中，你认为最重要的是：",
        options: [
            { label: "A. 互相理解与尊重", value: 'A' },
            { label: "B. 激情与浪漫", value: 'B' }
        ],
        results: {
            A: "建立在相互理解与尊重基础上的感情更加稳固长久",
            B: "保持激情与浪漫可以让爱情保持活力"
        }
    },
    {
        title: "《春夜喜雨》之润",
        background: "杜甫欣喜春夜降雨，滋润万物",
        characters: "杜甫",
        poem: {
            title: "春夜喜雨",
            author: "杜甫",
            content: [
                "好雨知时节",
                "当春乃发生",
                "随风潜入夜",
                "润物细无声"
            ]
        },
        question: "你更喜欢哪种方式的帮助：",
        options: [
            { label: "A. 默默无闻，不求回报", value: 'A' },
            { label: "B. 公开明确，各取所需", value: 'B' }
        ],
        results: {
            A: "像春雨一样无声地滋润他人，不求回报",
            B: "清晰明确地表达帮助，建立健康的互助关系"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems4;
} 