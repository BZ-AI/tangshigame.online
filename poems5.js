// 唐诗三百首数据库 - 第五批
const poems5 = [
    {
        title: "《题龙阳县青草湖》之悠",
        background: "唐代诗人骆宾王游览青草湖的悠闲心境",
        characters: "骆宾王",
        poem: {
            title: "题龙阳县青草湖",
            author: "骆宾王",
            content: [
                "清江一曲抱村流",
                "长夏江村事事幽",
                "自去自来堂上燕",
                "相亲相近水中鸥"
            ]
        },
        question: "在乡村生活中，你更看重：",
        options: [
            { label: "A. 宁静自在的环境", value: 'A' },
            { label: "B. 淳朴友善的邻里关系", value: 'B' }
        ],
        results: {
            A: "享受乡村的宁静与自然，远离城市的喧嚣",
            B: "体验淳朴的人际关系，感受乡村的人情味"
        }
    },
    {
        title: "《寻隐者不遇》之隐",
        background: "贾岛寻访隐居山林的隐士",
        characters: "贾岛、隐士",
        poem: {
            title: "寻隐者不遇",
            author: "贾岛",
            content: [
                "松下问童子",
                "言师采药去",
                "只在此山中",
                "云深不知处"
            ]
        },
        question: "面对追求不得的目标，你会：",
        options: [
            { label: "A. 执着追寻，坚持不懈", value: 'A' },
            { label: "B. 顺其自然，随缘而行", value: 'B' }
        ],
        results: {
            A: "坚持自己的目标，不轻易放弃，也许终有所获",
            B: "尊重自然规律，不强求结果，保持平和心态"
        }
    },
    {
        title: "《春望》之思",
        background: "杜甫在长安城中望春，思念家乡",
        characters: "杜甫",
        poem: {
            title: "春望",
            author: "杜甫",
            content: [
                "国破山河在",
                "城春草木深",
                "感时花溅泪",
                "恨别鸟惊心"
            ]
        },
        question: "在国家危难之际，你会选择：",
        options: [
            { label: "A. 投身报国，贡献力量", value: 'A' },
            { label: "B. 守护家人，确保安全", value: 'B' }
        ],
        results: {
            A: "以爱国之心，为国家尽一份力量",
            B: "先保护好自己和家人，才能更好地帮助他人"
        }
    },
    {
        title: "《山行》之幽",
        background: "杜牧秋日山行，欣赏秋色",
        characters: "杜牧",
        poem: {
            title: "山行",
            author: "杜牧",
            content: [
                "远上寒山石径斜",
                "白云生处有人家",
                "停车坐爱枫林晚",
                "霜叶红于二月花"
            ]
        },
        question: "在旅行中，你更看重：",
        options: [
            { label: "A. 行程中的意外发现", value: 'A' },
            { label: "B. 按计划探访著名景点", value: 'B' }
        ],
        results: {
            A: "享受旅途中的偶然惊喜，体验不一样的风景",
            B: "按计划探访经典景点，不错过重要的风景"
        }
    },
    {
        title: "《宿建德江》之静",
        background: "孟浩然夜宿建德江畔，感受自然宁静",
        characters: "孟浩然",
        poem: {
            title: "宿建德江",
            author: "孟浩然",
            content: [
                "移舟泊烟渚",
                "日暮客愁新",
                "野旷天低树",
                "江清月近人"
            ]
        },
        question: "独自旅行时，你更喜欢：",
        options: [
            { label: "A. 享受独处，感受宁静", value: 'A' },
            { label: "B. 结识新友，分享体验", value: 'B' }
        ],
        results: {
            A: "在独处中感受内心的平静，与自然更加亲近",
            B: "通过结交新朋友，丰富旅行体验"
        }
    },
    {
        title: "《玉阶怨》之怨",
        background: "李白描写闺中思妇的相思之情",
        characters: "李白、思妇",
        poem: {
            title: "玉阶怨",
            author: "李白",
            content: [
                "玉阶生白露",
                "夜久侵罗袜",
                "却下水晶帘",
                "玲珑望秋月"
            ]
        },
        question: "长时间等待爱人归来，你会：",
        options: [
            { label: "A. 专心等待，坚守承诺", value: 'A' },
            { label: "B. 充实自己，过好当下", value: 'B' }
        ],
        results: {
            A: "专注于对爱人的承诺，表现出忠诚和坚持",
            B: "在等待的同时，照顾好自己，发展个人兴趣"
        }
    },
    {
        title: "《清明》之怀",
        background: "杜牧清明时节回忆过往",
        characters: "杜牧",
        poem: {
            title: "清明",
            author: "杜牧",
            content: [
                "清明时节雨纷纷",
                "路上行人欲断魂",
                "借问酒家何处有",
                "牧童遥指杏花村"
            ]
        },
        question: "面对伤感的日子，你会选择：",
        options: [
            { label: "A. 独处缅怀，表达情感", value: 'A' },
            { label: "B. 寻求陪伴，分散注意力", value: 'B' }
        ],
        results: {
            A: "通过独处缅怀和表达情感，面对和处理伤感",
            B: "寻求亲友陪伴，转移注意力，缓解伤感情绪"
        }
    },
    {
        title: "《绝句》之物",
        background: "杜甫描写春天农村的生机勃勃",
        characters: "杜甫",
        poem: {
            title: "绝句",
            author: "杜甫",
            content: [
                "两个黄鹂鸣翠柳",
                "一行白鹭上青天",
                "窗含西岭千秋雪",
                "门泊东吴万里船"
            ]
        },
        question: "在欣赏自然风景时，你更注重：",
        options: [
            { label: "A. 全景的壮观与和谐", value: 'A' },
            { label: "B. 细节的精妙与生动", value: 'B' }
        ],
        results: {
            A: "关注全景的壮丽和整体的和谐美感",
            B: "留意细节的精妙，发现自然的精彩瞬间"
        }
    },
    {
        title: "《左迁至蓝关示侄孙湘》之节",
        background: "韩愈被贬谪时勉励侄孙保持节操",
        characters: "韩愈、侄孙湘",
        poem: {
            title: "左迁至蓝关示侄孙湘",
            author: "韩愈",
            content: [
                "一封朝奏九重天",
                "夕贬潮州路八千",
                "欲为圣明除弊事",
                "肯将衰朽惜残年"
            ]
        },
        question: "遇到不公正待遇时，你会选择：",
        options: [
            { label: "A. 坚持原则，不改初衷", value: 'A' },
            { label: "B. 适当妥协，保全自身", value: 'B' }
        ],
        results: {
            A: "坚守自己的原则和信念，即使面临困境也不妥协",
            B: "理性地评估形势，适时做出策略性调整"
        }
    },
    {
        title: "《酬乐天扬州初逢席上见赠》之友",
        background: "刘禹锡与白居易在扬州重逢",
        characters: "刘禹锡、白居易",
        poem: {
            title: "酬乐天扬州初逢席上见赠",
            author: "刘禹锡",
            content: [
                "巴山楚水凄凉地",
                "二十三年弃置身",
                "怀旧空吟闻笛赋",
                "到乡翻似烂柯人"
            ]
        },
        question: "与久未见面的老友重逢，你更愿意：",
        options: [
            { label: "A. 叙旧话今，分享人生经历", value: 'A' },
            { label: "B. 把握当下，享受重聚时光", value: 'B' }
        ],
        results: {
            A: "通过分享各自的经历和感悟，加深相互了解",
            B: "珍惜重逢的时刻，创造新的共同回忆"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems5;
} 