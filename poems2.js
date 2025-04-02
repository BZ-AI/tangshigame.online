// 唐诗三百首数据库 - 第二批
const poems2 = [
    {
        title: "《春晓》之醒",
        background: "孟浩然春日晨起，感受春天气息",
        characters: "孟浩然",
        poem: {
            title: "春晓",
            author: "孟浩然",
            content: [
                "春眠不觉晓",
                "处处闻啼鸟",
                "夜来风雨声",
                "花落知多少"
            ]
        },
        question: "春日清晨，你更愿意：",
        options: [
            { label: "A. 继续贪睡，享受惬意", value: 'A' },
            { label: "B. 早起漫步，感受春意", value: 'B' }
        ],
        results: {
            A: "享受片刻的惬意，但可能错过清晨最美的风景",
            B: "早起观察春日万物，感受大自然的生机与活力"
        }
    },
    {
        title: "《静夜思》之念",
        background: "李白夜晚思乡，情感丰富",
        characters: "李白",
        poem: {
            title: "静夜思",
            author: "李白",
            content: [
                "床前明月光",
                "疑是地上霜",
                "举头望明月",
                "低头思故乡"
            ]
        },
        question: "远离家乡时，你会如何排解思乡之情：",
        options: [
            { label: "A. 给家人写信或通话", value: 'A' },
            { label: "B. 寻找新环境中的乐趣", value: 'B' }
        ],
        results: {
            A: "保持与家人的联系，分享近况，缓解思乡之情",
            B: "积极融入新环境，通过探索新事物减轻对家乡的思念"
        }
    },
    {
        title: "《望庐山瀑布》之奇",
        background: "李白游览庐山，被瀑布壮观景象震撼",
        characters: "李白",
        poem: {
            title: "望庐山瀑布",
            author: "李白",
            content: [
                "日照香炉生紫烟",
                "遥看瀑布挂前川",
                "飞流直下三千尺",
                "疑是银河落九天"
            ]
        },
        question: "面对如此壮观的自然景观，你会：",
        options: [
            { label: "A. 静静观赏，用心感受", value: 'A' },
            { label: "B. 大声赞叹，与人分享", value: 'B' }
        ],
        results: {
            A: "在静默中感受自然的壮丽与震撼，体会与大自然合一的境界",
            B: "表达对美景的赞叹与热爱，与他人分享这份感动"
        }
    },
    {
        title: "《黄鹤楼送孟浩然之广陵》之别",
        background: "李白在黄鹤楼送别好友孟浩然",
        characters: "李白、孟浩然",
        poem: {
            title: "黄鹤楼送孟浩然之广陵",
            author: "李白",
            content: [
                "故人西辞黄鹤楼",
                "烟花三月下扬州",
                "孤帆远影碧空尽",
                "唯见长江天际流"
            ]
        },
        question: "送别朋友远行，你会选择：",
        options: [
            { label: "A. 一直目送直到看不见", value: 'A' },
            { label: "B. 简单告别后转身离去", value: 'B' }
        ],
        results: {
            A: "表达对朋友深厚的情谊，珍惜每一刻相处的时光",
            B: "理解离别是为了更好的重逢，洒脱面对人生的聚散"
        }
    },
    {
        title: "《望天门山》之观",
        background: "李白游览天门山，被其壮丽景色所震撼",
        characters: "李白",
        poem: {
            title: "望天门山",
            author: "李白",
            content: [
                "天门中断楚江开",
                "碧水东流至此回",
                "两岸青山相对出",
                "孤帆一片日边来"
            ]
        },
        question: "面对壮丽的山水，你更倾向于：",
        options: [
            { label: "A. 登高远眺，体验壮阔", value: 'A' },
            { label: "B. 近距离观察，感受细节", value: 'B' }
        ],
        results: {
            A: "站在高处，领略大自然的雄伟壮观",
            B: "关注细节，发现大自然中的精妙之处"
        }
    },
    {
        title: "《赠花卿》之情",
        background: "杜甫送别好友，表达不舍之情",
        characters: "杜甫、花卿",
        poem: {
            title: "赠花卿",
            author: "杜甫",
            content: [
                "锦城丝管日纷纷",
                "半入江风半入云",
                "此曲只应天上有",
                "人间能得几回闻"
            ]
        },
        question: "当听到美妙的音乐时，你会：",
        options: [
            { label: "A. 闭眼静听，沉浸其中", value: 'A' },
            { label: "B. 随音乐起舞或轻声吟唱", value: 'B' }
        ],
        results: {
            A: "用心感受音乐的美妙，让心灵得到洗涤",
            B: "通过肢体或声音表达对音乐的感动，释放内心的热情"
        }
    },
    {
        title: "《题都城南庄》之居",
        background: "崔护春游偶遇美丽村庄，心生留恋",
        characters: "崔护",
        poem: {
            title: "题都城南庄",
            author: "崔护",
            content: [
                "去年今日此门中",
                "人面桃花相映红",
                "人面不知何处去",
                "桃花依旧笑春风"
            ]
        },
        question: "面对美好但短暂的邂逅，你会：",
        options: [
            { label: "A. 珍惜当下，刻画记忆", value: 'A' },
            { label: "B. 尝试寻找，再续前缘", value: 'B' }
        ],
        results: {
            A: "珍惜当下的美好时光，将其铭记于心",
            B: "主动追寻美好的可能，期待再次相遇"
        }
    },
    {
        title: "《将进酒》之豪",
        background: "李白宴会上豪饮抒怀，表达豪情壮志",
        characters: "李白、友人",
        poem: {
            title: "将进酒",
            author: "李白",
            content: [
                "君不见黄河之水天上来",
                "奔流到海不复回",
                "君不见高堂明镜悲白发",
                "朝如青丝暮成雪"
            ]
        },
        question: "面对人生短暂的感慨，你会选择：",
        options: [
            { label: "A. 及时行乐，把握当下", value: 'A' },
            { label: "B. 规划人生，留下价值", value: 'B' }
        ],
        results: {
            A: "享受现在的快乐，不留遗憾",
            B: "规划长远的人生，追求更大的价值"
        }
    },
    {
        title: "《赋得古原草送别》之思",
        background: "白居易以草喻人，表达离别情谊",
        characters: "白居易、友人",
        poem: {
            title: "赋得古原草送别",
            author: "白居易",
            content: [
                "离离原上草",
                "一岁一枯荣",
                "野火烧不尽",
                "春风吹又生"
            ]
        },
        question: "面对人生的挫折，你更倾向于：",
        options: [
            { label: "A. 坚韧不拔，百折不挠", value: 'A' },
            { label: "B. 顺其自然，静待时机", value: 'B' }
        ],
        results: {
            A: "坚持不懈，直面困难，展现坚韧的生命力",
            B: "顺应自然规律，等待合适的时机再出发"
        }
    },
    {
        title: "《早发白帝城》之快",
        background: "李白被赦免后乘船离开白帝城，心情畅快",
        characters: "李白",
        poem: {
            title: "早发白帝城",
            author: "李白",
            content: [
                "朝辞白帝彩云间",
                "千里江陵一日还",
                "两岸猿声啼不住",
                "轻舟已过万重山"
            ]
        },
        question: "获得自由后，你会首先：",
        options: [
            { label: "A. 迅速启程，奔向远方", value: 'A' },
            { label: "B. 驻足回望，感谢过往", value: 'B' }
        ],
        results: {
            A: "抓住机会，迅速向前，开启新的人生旅程",
            B: "回顾过去，感恩经历，带着感悟继续前行"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems2;
} 