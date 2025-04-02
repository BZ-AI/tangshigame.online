// 唐诗三百首数据库 - 第八批
const poems8 = [
    {
        title: "《鸟鸣涧》之幽",
        background: "王维描写山中幽静的景色",
        characters: "王维",
        poem: {
            title: "鸟鸣涧",
            author: "王维",
            content: [
                "人闲桂花落",
                "夜静春山空",
                "月出惊山鸟",
                "时鸣春涧中"
            ]
        },
        question: "在宁静的环境中，你更喜欢：",
        options: [
            { label: "A. 静心感受自然之声", value: 'A' },
            { label: "B. 自由发挥，创作诗文", value: 'B' }
        ],
        results: {
            A: "倾听大自然的声音，感受内心的平静和宁和",
            B: "将美好环境转化为创作灵感，通过创作表达感受"
        }
    },
    {
        title: "《长相思》之离",
        background: "李白表达相思之情",
        characters: "李白、思念之人",
        poem: {
            title: "长相思",
            author: "李白",
            content: [
                "日色欲尽花含烟",
                "月明欲素愁不眠",
                "赵瑟初停凤凰柱",
                "蜀琴欲奏鸳鸯弦"
            ]
        },
        question: "思念远方的人时，你会：",
        options: [
            { label: "A. 主动联系，表达思念", value: 'A' },
            { label: "B. 转移注意力，等待相聚", value: 'B' }
        ],
        results: {
            A: "通过联系表达思念之情，维系感情纽带",
            B: "理性面对思念，专注当下事务，期待未来相聚"
        }
    },
    {
        title: "《望洞庭湖赠张丞相》之壮",
        background: "孟浩然向张丞相描绘洞庭湖的壮丽",
        characters: "孟浩然、张丞相",
        poem: {
            title: "望洞庭湖赠张丞相",
            author: "孟浩然",
            content: [
                "八月湖水平",
                "涵虚混太清",
                "气蒸云梦泽",
                "波撼岳阳城"
            ]
        },
        question: "面对壮观的自然景象，你会：",
        options: [
            { label: "A. 感叹自然伟力，心生敬畏", value: 'A' },
            { label: "B. 联想历史人文，产生共鸣", value: 'B' }
        ],
        results: {
            A: "体会自然的伟大力量，感受人与自然的和谐",
            B: "从历史文化角度欣赏景观，丰富观赏体验"
        }
    },
    {
        title: "《塞下曲》之志",
        background: "卢纶描写边塞将士的英勇",
        characters: "卢纶、边塞将士",
        poem: {
            title: "塞下曲",
            author: "卢纶",
            content: [
                "月黑雁飞高",
                "单于夜遁逃",
                "欲将轻骑逐",
                "大雪满弓刀"
            ]
        },
        question: "面对艰难任务，你更倾向于：",
        options: [
            { label: "A. 迎难而上，奋勇前进", value: 'A' },
            { label: "B. 谨慎评估，选择时机", value: 'B' }
        ],
        results: {
            A: "勇往直前，不畏艰难险阻，展现进取精神",
            B: "理性评估情况，选择最佳时机行动，提高成功率"
        }
    },
    {
        title: "《石头城》之忆",
        background: "刘禹锡回忆繁华的建康（南京）",
        characters: "刘禹锡",
        poem: {
            title: "石头城",
            author: "刘禹锡",
            content: [
                "山围故国周遭在",
                "潮打空城寂寞回",
                "淮水东边旧时月",
                "夜深还过女墙来"
            ]
        },
        question: "回忆过去的繁华，你会：",
        options: [
            { label: "A. 感慨世事变迁，珍视当下", value: 'A' },
            { label: "B. 从历史中汲取智慧，展望未来", value: 'B' }
        ],
        results: {
            A: "理解盛衰无常的道理，更加珍惜当下的生活",
            B: "从历史中学习经验教训，为未来发展做准备"
        }
    },
    {
        title: "《赋得古原草送别》之情",
        background: "白居易以草喻人，抒发送别之情",
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
        question: "面对挫折与困难，你更相信：",
        options: [
            { label: "A. 坚韧不拔的生命力", value: 'A' },
            { label: "B. 适时休整的重要性", value: 'B' }
        ],
        results: {
            A: "相信生命的韧性，即使遭遇打击也能重新站起",
            B: "懂得适时调整自己，为下一次成长做好准备"
        }
    },
    {
        title: "《黄鹤楼》之叹",
        background: "崔颢登临黄鹤楼，感慨人生与历史",
        characters: "崔颢",
        poem: {
            title: "黄鹤楼",
            author: "崔颢",
            content: [
                "昔人已乘黄鹤去",
                "此地空余黄鹤楼",
                "黄鹤一去不复返",
                "白云千载空悠悠"
            ]
        },
        question: "对于逝去的美好，你会：",
        options: [
            { label: "A. 珍藏记忆，心怀感恩", value: 'A' },
            { label: "B. 寻找新的美好，继续前行", value: 'B' }
        ],
        results: {
            A: "珍惜美好回忆，感恩曾经的经历和遇见",
            B: "接受过去已逝的事实，积极寻找新的美好"
        }
    },
    {
        title: "《秋夕》之思",
        background: "杜牧在秋夜思念远方之人",
        characters: "杜牧",
        poem: {
            title: "秋夕",
            author: "杜牧",
            content: [
                "银烛秋光冷画屏",
                "轻罗小扇扑流萤",
                "天阶夜色凉如水",
                "坐看牵牛织女星"
            ]
        },
        question: "夜晚独处时，你更喜欢：",
        options: [
            { label: "A. 静观天象，思考人生", value: 'A' },
            { label: "B. 读书创作，充实自我", value: 'B' }
        ],
        results: {
            A: "在宁静的夜晚观察自然，思考人生的意义",
            B: "利用夜晚时光充实自己，提升个人价值"
        }
    },
    {
        title: "《泊船瓜洲》之归",
        background: "王安石归途中泊船瓜洲",
        characters: "王安石",
        poem: {
            title: "泊船瓜洲",
            author: "王安石",
            content: [
                "京口瓜洲一水间",
                "钟山只隔数重山",
                "春风又绿江南岸",
                "明月何时照我还"
            ]
        },
        question: "在归途中，你更看重：",
        options: [
            { label: "A. 沿途风景，享受过程", value: 'A' },
            { label: "B. 到达目的地，完成旅程", value: 'B' }
        ],
        results: {
            A: "珍视归途中的风景，感受旅程的意义",
            B: "关注目标的实现，期待与家人团聚的时刻"
        }
    },
    {
        title: "《枫桥夜泊》之宁",
        background: "张继夜泊枫桥，听闻寺院钟声",
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
        question: "在旅途中遇到不适，你会：",
        options: [
            { label: "A. 调整心态，寻找慰藉", value: 'A' },
            { label: "B. 改变计划，寻求舒适", value: 'B' }
        ],
        results: {
            A: "调整自己的心态，在不适中找到慰藉，保持平静",
            B: "积极寻找解决方案，改善当前处境，追求舒适"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems8;
} 