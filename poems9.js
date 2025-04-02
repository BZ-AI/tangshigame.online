// 唐诗三百首数据库 - 第九批
const poems9 = [
    {
        title: "《题临安邸》之感",
        background: "林升对南宋小朝廷的感慨",
        characters: "林升",
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
        question: "面对国家危难，你认为领导者应该：",
        options: [
            { label: "A. 直面现实，积极应对", value: 'A' },
            { label: "B. 维持稳定，徐图恢复", value: 'B' }
        ],
        results: {
            A: "勇于面对困难，积极寻求解决方案，不逃避责任",
            B: "保持社会稳定，在稳定中寻求发展机会"
        }
    },
    {
        title: "《春夜洛城闻笛》之思",
        background: "李白在洛阳城春夜听到笛声",
        characters: "李白",
        poem: {
            title: "春夜洛城闻笛",
            author: "李白",
            content: [
                "谁家玉笛暗飞声",
                "散入春风满洛城",
                "此夜曲中闻折柳",
                "何人不起故园情"
            ]
        },
        question: "听到勾起思乡之情的音乐时，你会：",
        options: [
            { label: "A. 沉浸其中，尽情感受", value: 'A' },
            { label: "B. 转移情绪，保持平静", value: 'B' }
        ],
        results: {
            A: "允许自己沉浸在情感中，体验音乐带来的思乡之情",
            B: "控制情绪波动，保持理性和平静的状态"
        }
    },
    {
        title: "《无题·相见时难别亦难》之情",
        background: "李商隐描写爱情离别的痛苦",
        characters: "李商隐、爱人",
        poem: {
            title: "无题·相见时难别亦难",
            author: "李商隐",
            content: [
                "相见时难别亦难",
                "东风无力百花残",
                "春蚕到死丝方尽",
                "蜡炬成灰泪始干"
            ]
        },
        question: "在爱情中面临困难时，你认为重要的是：",
        options: [
            { label: "A. 不懈的坚持与付出", value: 'A' },
            { label: "B. 理性的思考与决定", value: 'B' }
        ],
        results: {
            A: "相信真爱需要坚持和付出，愿意为爱情奉献",
            B: "在感情中保持理性思考，做出对双方都好的决定"
        }
    },
    {
        title: "《八阵图》之诵",
        background: "杜甫凭吊诸葛亮的八阵图",
        characters: "杜甫、诸葛亮",
        poem: {
            title: "八阵图",
            author: "杜甫",
            content: [
                "功盖三分国",
                "名成八阵图",
                "江流石不转",
                "遗恨失吞吴"
            ]
        },
        question: "对历史人物的评价，你更注重：",
        options: [
            { label: "A. 功过是非，历史贡献", value: 'A' },
            { label: "B. 个人品格，人性光辉", value: 'B' }
        ],
        results: {
            A: "从历史影响和贡献的角度评价历史人物",
            B: "关注历史人物的人格魅力和精神品质"
        }
    },
    {
        title: "《宿府》之悟",
        background: "杜甫在府中留宿的感悟",
        characters: "杜甫",
        poem: {
            title: "宿府",
            author: "杜甫",
            content: [
                "岁暮归南山",
                "风枯悲画角",
                "独夜忆秦关",
                "听钟未眠客"
            ]
        },
        question: "在深夜无法入睡时，你会：",
        options: [
            { label: "A. 静思冥想，整理思绪", value: 'A' },
            { label: "B. 阅读写作，利用时间", value: 'B' }
        ],
        results: {
            A: "利用安静的夜晚梳理思绪，进行自我反思",
            B: "通过阅读或写作充实自己，使时间更有价值"
        }
    },
    {
        title: "《逢入京使》之念",
        background: "岑参在边塞遇到入京使者",
        characters: "岑参、京使",
        poem: {
            title: "逢入京使",
            author: "岑参",
            content: [
                "故园东望路漫漫",
                "双袖龙钟泪不干",
                "马上相逢无纸笔",
                "凭君传语报平安"
            ]
        },
        question: "与家人长期分离时，你更希望：",
        options: [
            { label: "A. 及时传达自己的平安", value: 'A' },
            { label: "B. 分享自己的真实处境", value: 'B' }
        ],
        results: {
            A: "优先让家人知道自己的安全，减轻他们的担忧",
            B: "真实分享自己的处境，与家人共同面对困难"
        }
    },
    {
        title: "《商山早行》之志",
        background: "温庭筠描写早晨赶路的情景",
        characters: "温庭筠",
        poem: {
            title: "商山早行",
            author: "温庭筠",
            content: [
                "晨起动征铎",
                "客行悲故乡",
                "鸡声茅店月",
                "人迹板桥霜"
            ]
        },
        question: "在旅途中面对困难，你会选择：",
        options: [
            { label: "A. 坚持前行，不改初衷", value: 'A' },
            { label: "B. 灵活调整，寻找捷径", value: 'B' }
        ],
        results: {
            A: "保持坚定的意志，克服困难继续前进",
            B: "根据实际情况调整计划，寻找更好的解决方案"
        }
    },
    {
        title: "《夏日南亭怀辛大》之友",
        background: "孟浩然怀念友人辛大",
        characters: "孟浩然、辛大",
        poem: {
            title: "夏日南亭怀辛大",
            author: "孟浩然",
            content: [
                "山光忽西落",
                "池月渐东上",
                "散发乘夕凉",
                "开轩卧闲敞"
            ]
        },
        question: "在闲暇时光，你更喜欢：",
        options: [
            { label: "A. 独处享受，放松自我", value: 'A' },
            { label: "B. 与友相聚，分享时光", value: 'B' }
        ],
        results: {
            A: "享受独处的宁静时光，放松身心",
            B: "与朋友共度时光，增进感情，分享生活"
        }
    },
    {
        title: "《秋词》之秋",
        background: "刘禹锡对秋天的独特感受",
        characters: "刘禹锡",
        poem: {
            title: "秋词",
            author: "刘禹锡",
            content: [
                "自古逢秋悲寂寥",
                "我言秋日胜春朝",
                "晴空一鹤排云上",
                "便引诗情到碧霄"
            ]
        },
        question: "当主流观点与你不同时，你会：",
        options: [
            { label: "A. 坚持己见，表达不同", value: 'A' },
            { label: "B. 理解包容，尊重差异", value: 'B' }
        ],
        results: {
            A: "有勇气表达与众不同的观点，保持独立思考",
            B: "理解不同观点的合理性，尊重多元看法"
        }
    },
    {
        title: "《闻雁》之思",
        background: "杜甫听到大雁的叫声，思念故乡",
        characters: "杜甫",
        poem: {
            title: "闻雁",
            author: "杜甫",
            content: [
                "远书归雁洛阳边",
                "家泪欲飞天地间",
                "恐是潼关关吏后",
                "留因风雨至今年"
            ]
        },
        question: "对远方亲人的思念，你会：",
        options: [
            { label: "A. 直接表达，不加掩饰", value: 'A' },
            { label: "B. 适度控制，注重当下", value: 'B' }
        ],
        results: {
            A: "坦诚表达思念之情，保持亲密的情感连接",
            B: "适度控制情绪，关注现实生活，保持积极状态"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems9;
} 