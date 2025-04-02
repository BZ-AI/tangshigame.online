// 唐诗三百首数据库 - 第十批
const poems10 = [
    {
        title: "《终南别业》之居",
        background: "王维描写在终南山隐居的生活",
        characters: "王维",
        poem: {
            title: "终南别业",
            author: "王维",
            content: [
                "中岁颇好道",
                "晚家南山陲",
                "兴来每独往",
                "胜事空自知"
            ]
        },
        question: "关于生活方式，你更偏向：",
        options: [
            { label: "A. 追求内心平静的简单生活", value: 'A' },
            { label: "B. 投身社会，积极参与事务", value: 'B' }
        ],
        results: {
            A: "选择简单平静的生活方式，注重内心的满足",
            B: "积极参与社会事务，在实践中实现自我价值"
        }
    },
    {
        title: "《春思》之怀",
        background: "李白春日思念远方友人",
        characters: "李白",
        poem: {
            title: "春思",
            author: "李白",
            content: [
                "燕草如碧丝",
                "秦桑低绿枝",
                "当君怀归日",
                "是妾断肠时"
            ]
        },
        question: "思念远方的人时，你更注重：",
        options: [
            { label: "A. 表达内心真实情感", value: 'A' },
            { label: "B. 保持情感的适度克制", value: 'B' }
        ],
        results: {
            A: "坦率表达内心情感，让对方感受到真挚的思念",
            B: "保持情感的适度表达，避免过度情绪波动"
        }
    },
    {
        title: "《宿建德江》之眠",
        background: "孟浩然夜宿建德江的感受",
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
        question: "在陌生环境中过夜，你会：",
        options: [
            { label: "A. 欣赏新环境的独特之处", value: 'A' },
            { label: "B. 想办法让自己舒适安心", value: 'B' }
        ],
        results: {
            A: "关注新环境的美好与特别，从中获取新的体验",
            B: "注重创造舒适的条件，确保自己能够休息好"
        }
    },
    {
        title: "《渡荆门送别》之别",
        background: "李白送别友人，抒发离别之情",
        characters: "李白、友人",
        poem: {
            title: "渡荆门送别",
            author: "李白",
            content: [
                "渡远荆门外",
                "来从楚国游",
                "山随平野尽",
                "江入大荒流"
            ]
        },
        question: "送别远行的朋友，你更倾向于：",
        options: [
            { label: "A. 表达真挚祝福，展望再见", value: 'A' },
            { label: "B. 详细叮嘱，关心行程安排", value: 'B' }
        ],
        results: {
            A: "表达真挚的祝福，展望未来的再次相聚",
            B: "关心朋友旅途中的安全和舒适，提供实际帮助"
        }
    },
    {
        title: "《赠孟浩然》之谊",
        background: "李白赠诗给好友孟浩然",
        characters: "李白、孟浩然",
        poem: {
            title: "赠孟浩然",
            author: "李白",
            content: [
                "吾爱孟夫子",
                "风流天下闻",
                "红颜弃轩冕",
                "白首卧松云"
            ]
        },
        question: "对朋友的生活选择，你更愿意：",
        options: [
            { label: "A. 理解支持，尊重差异", value: 'A' },
            { label: "B. 提供建议，分享经验", value: 'B' }
        ],
        results: {
            A: "尊重朋友的选择，理解不同的生活方式",
            B: "分享自己的经验和想法，帮助朋友做出更好的决定"
        }
    },
    {
        title: "《闻王昌龄左迁龙标遥有此寄》之慰",
        background: "李白安慰被贬谪的王昌龄",
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
        question: "朋友遭遇挫折时，你会：",
        options: [
            { label: "A. 表达同情，给予安慰", value: 'A' },
            { label: "B. 提供帮助，解决问题", value: 'B' }
        ],
        results: {
            A: "给予情感上的支持和安慰，让朋友感到被理解",
            B: "尽可能提供实际帮助，协助朋友解决困难"
        }
    },
    {
        title: "《塞下曲》之壮",
        background: "卢纶描写边塞军旅生活",
        characters: "卢纶、边塞将士",
        poem: {
            title: "塞下曲",
            author: "卢纶",
            content: [
                "林暗草惊风",
                "将军夜引弓",
                "平明寻白羽",
                "没在石棱中"
            ]
        },
        question: "面对紧急情况，你更倾向于：",
        options: [
            { label: "A. 迅速决断，立即行动", value: 'A' },
            { label: "B. 冷静分析，谨慎应对", value: 'B' }
        ],
        results: {
            A: "在紧急情况下果断决策，快速采取行动",
            B: "保持冷静理性，分析情况后再做决定"
        }
    },
    {
        title: "《望月怀远》之思",
        background: "张九龄望月思念远方亲友",
        characters: "张九龄",
        poem: {
            title: "望月怀远",
            author: "张九龄",
            content: [
                "海上生明月",
                "天涯共此时",
                "情人怨遥夜",
                "竟夕起相思"
            ]
        },
        question: "面对与亲友的远距离关系，你更重视：",
        options: [
            { label: "A. 情感的交流与连接", value: 'A' },
            { label: "B. 各自空间与独立成长", value: 'B' }
        ],
        results: {
            A: "保持频繁的情感交流，维系亲密的关系",
            B: "尊重彼此的独立空间，鼓励各自的成长"
        }
    },
    {
        title: "《行路难》之叹",
        background: "李白感叹人生道路的艰难",
        characters: "李白",
        poem: {
            title: "行路难",
            author: "李白",
            content: [
                "金樽清酒斗十千",
                "玉盘珍馐直万钱",
                "停杯投箸不能食",
                "拔剑四顾心茫然"
            ]
        },
        question: "面对人生的困境，你会选择：",
        options: [
            { label: "A. 积极面对，寻求突破", value: 'A' },
            { label: "B. 暂时退让，等待时机", value: 'B' }
        ],
        results: {
            A: "直面困难，主动寻找解决方案，突破困境",
            B: "理性评估形势，适时退让，等待更好的机会"
        }
    },
    {
        title: "《送友人》之行",
        background: "李白送别远行的朋友",
        characters: "李白、友人",
        poem: {
            title: "送友人",
            author: "李白",
            content: [
                "青山横北郭",
                "白水绕东城",
                "此地一为别",
                "孤蓬万里征"
            ]
        },
        question: "当朋友即将远行，你会给予：",
        options: [
            { label: "A. 真挚的情感表达和祝福", value: 'A' },
            { label: "B. 实用的建议和帮助", value: 'B' }
        ],
        results: {
            A: "表达真挚的情感和美好的祝福，让朋友感受到关爱",
            B: "提供实用的建议和帮助，关心朋友旅途中的实际需要"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems10;
} 