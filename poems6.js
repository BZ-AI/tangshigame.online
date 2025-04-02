// 唐诗三百首数据库 - 第六批
const poems6 = [
    {
        title: "《杂诗》之惜",
        background: "王维表达对时光流逝的感慨",
        characters: "王维",
        poem: {
            title: "杂诗",
            author: "王维",
            content: [
                "君自故乡来",
                "应知故乡事",
                "来日绮窗前",
                "寒梅著花未"
            ]
        },
        question: "对于思念家乡，你更倾向于：",
        options: [
            { label: "A. 常常回家探望亲人", value: 'A' },
            { label: "B. 在外打拼，偶尔寄托乡愁", value: 'B' }
        ],
        results: {
            A: "与家人保持密切联系，定期回家探望",
            B: "在外积极奋斗，通过其他方式寄托思乡之情"
        }
    },
    {
        title: "《出塞》之壮",
        background: "王昌龄描写边塞战士的壮志豪情",
        characters: "王昌龄、边塞战士",
        poem: {
            title: "出塞",
            author: "王昌龄",
            content: [
                "秦时明月汉时关",
                "万里长征人未还",
                "但使龙城飞将在",
                "不教胡马度阴山"
            ]
        },
        question: "面对艰巨任务，你更相信：",
        options: [
            { label: "A. 英雄人物的关键作用", value: 'A' },
            { label: "B. 团队协作的集体力量", value: 'B' }
        ],
        results: {
            A: "相信关键人物的领导能力和影响力",
            B: "相信团队合作能够克服更大的挑战"
        }
    },
    {
        title: "《送友人》之别",
        background: "李白送别友人的依依惜别",
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
        question: "与好友分别时，你更倾向于：",
        options: [
            { label: "A. 淡然处之，相信未来再会", value: 'A' },
            { label: "B. 珍视当下，尽情享受离别前的时光", value: 'B' }
        ],
        results: {
            A: "保持乐观平静的态度，相信缘分会使朋友重逢",
            B: "珍惜离别前的每一刻，创造美好的回忆"
        }
    },
    {
        title: "《宣州谢朓楼饯别校书叔云》之情",
        background: "李白在宣州谢朓楼送别叔父",
        characters: "李白、叔父",
        poem: {
            title: "宣州谢朓楼饯别校书叔云",
            author: "李白",
            content: [
                "弃我去者昨日之日不可留",
                "乱我心者今日之日多烦忧",
                "长风万里送秋雁",
                "对此可以酣高楼"
            ]
        },
        question: "面对离别的烦忧，你会选择：",
        options: [
            { label: "A. 沉浸其中，充分体验情感", value: 'A' },
            { label: "B. 转移注意力，寻找积极面", value: 'B' }
        ],
        results: {
            A: "允许自己体验离别的情感，不压抑内心的感受",
            B: "寻找积极的事物，转移注意力，保持乐观"
        }
    },
    {
        title: "《暮江吟》之景",
        background: "白居易描写暮色中的江景",
        characters: "白居易",
        poem: {
            title: "暮江吟",
            author: "白居易",
            content: [
                "一道残阳铺水中",
                "半江瑟瑟半江红",
                "可怜九月初三夜",
                "露似珍珠月似弓"
            ]
        },
        question: "欣赏美景时，你更喜欢：",
        options: [
            { label: "A. 静静观赏，沉浸其中", value: 'A' },
            { label: "B. 拍照记录，分享体验", value: 'B' }
        ],
        results: {
            A: "享受身临其境的感受，让美景留在心中",
            B: "通过影像记录美好瞬间，与他人分享快乐"
        }
    },
    {
        title: "《江南春》之美",
        background: "杜牧描绘江南春景的优美",
        characters: "杜牧",
        poem: {
            title: "江南春",
            author: "杜牧",
            content: [
                "千里莺啼绿映红",
                "水村山郭酒旗风",
                "南朝四百八十寺",
                "多少楼台烟雨中"
            ]
        },
        question: "在江南游览时，你更向往：",
        options: [
            { label: "A. 人文古迹的历史韵味", value: 'A' },
            { label: "B. 自然风光的诗意美感", value: 'B' }
        ],
        results: {
            A: "探寻历史遗迹，感受江南的人文底蕴",
            B: "欣赏自然风光，体验江南的诗情画意"
        }
    },
    {
        title: "《赠别》之情",
        background: "杜牧送别好友的情谊",
        characters: "杜牧、友人",
        poem: {
            title: "赠别",
            author: "杜牧",
            content: [
                "娉娉袅袅十三余",
                "豆蔻梢头二月初",
                "春风十里扬州路",
                "卷上珠帘总不如"
            ]
        },
        question: "你认为友情中最重要的是：",
        options: [
            { label: "A. 真诚相待，坦诚沟通", value: 'A' },
            { label: "B. 理解包容，各自成长", value: 'B' }
        ],
        results: {
            A: "重视坦诚的沟通和真诚的态度",
            B: "注重相互理解和包容，支持彼此的成长"
        }
    },
    {
        title: "《登飞来峰》之悟",
        background: "李白登临飞来峰的感悟",
        characters: "李白",
        poem: {
            title: "登飞来峰",
            author: "李白",
            content: [
                "飞来山上千寻塔",
                "闻说鸡鸣见日升",
                "不畏浮云遮望眼",
                "自缘身在最高层"
            ]
        },
        question: "面对人生的困难，你会：",
        options: [
            { label: "A. 努力攀登高处，获得更广阔视野", value: 'A' },
            { label: "B. 保持平常心，相信云开见日", value: 'B' }
        ],
        results: {
            A: "不断提升自己，努力到达更高的位置，获得更清晰的视野",
            B: "保持平和的心态，相信困难如浮云终将散去"
        }
    },
    {
        title: "《小儿垂钓》之童",
        background: "胡令能描写儿童垂钓的天真",
        characters: "胡令能、小儿",
        poem: {
            title: "小儿垂钓",
            author: "胡令能",
            content: [
                "蓬头稚子学垂纶",
                "侧坐莓苔草映身",
                "路人借问遥招手",
                "怕得鱼惊不应人"
            ]
        },
        question: "面对干扰，你会选择：",
        options: [
            { label: "A. 专注当下，不受外界影响", value: 'A' },
            { label: "B. 灵活应对，平衡各方需求", value: 'B' }
        ],
        results: {
            A: "全神贯注于当前的事情，不被外部干扰分散注意力",
            B: "灵活处理各种情况，在专注和应对之间取得平衡"
        }
    },
    {
        title: "《无题》之爱",
        background: "李商隐表达深沉而隐晦的爱情",
        characters: "李商隐、爱人",
        poem: {
            title: "无题",
            author: "李商隐",
            content: [
                "相见时难别亦难",
                "东风无力百花残",
                "春蚕到死丝方尽",
                "蜡炬成灰泪始干"
            ]
        },
        question: "在爱情中，你更看重：",
        options: [
            { label: "A. 深沉坚定的爱与奉献", value: 'A' },
            { label: "B. 理性平衡的情感交流", value: 'B' }
        ],
        results: {
            A: "愿意为爱付出全部，即使面临困难也不退缩",
            B: "注重情感的平衡和理性，保持健康的关系"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems6;
} 