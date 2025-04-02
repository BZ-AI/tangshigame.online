// 唐诗三百首数据库 - 第三批
const poems3 = [
    {
        title: "《夜宿山寺》之宁",
        background: "李白夜宿山寺，感受山中宁静",
        characters: "李白",
        poem: {
            title: "夜宿山寺",
            author: "李白",
            content: [
                "危楼高百尺",
                "手可摘星辰",
                "不敢高声语",
                "恐惊天上人"
            ]
        },
        question: "在安静的环境中，你会选择：",
        options: [
            { label: "A. 保持安静，尊重氛围", value: 'A' },
            { label: "B. 轻声交流，分享感受", value: 'B' }
        ],
        results: {
            A: "尊重环境的宁静，沉浸在内心的平静中",
            B: "与同伴轻声分享感受，增进彼此的理解"
        }
    },
    {
        title: "《望洞庭》之壮",
        background: "孟浩然登高望洞庭湖，被其壮观所震撼",
        characters: "孟浩然",
        poem: {
            title: "望洞庭",
            author: "孟浩然",
            content: [
                "湖光秋月两相和",
                "潭面无风镜未磨",
                "遥望洞庭山水翠",
                "白银盘里一青螺"
            ]
        },
        question: "面对壮丽的湖光山色，你会：",
        options: [
            { label: "A. 拿起相机，记录美景", value: 'A' },
            { label: "B. 凝神欣赏，铭记于心", value: 'B' }
        ],
        results: {
            A: "用相机留住美丽的瞬间，与他人分享这份美好",
            B: "全身心地欣赏美景，让其深深刻在记忆中"
        }
    },
    {
        title: "《凉州词》之感",
        background: "王翰在边塞写下豪放的诗句",
        characters: "王翰、将士们",
        poem: {
            title: "凉州词",
            author: "王翰",
            content: [
                "葡萄美酒夜光杯",
                "欲饮琵琶马上催",
                "醉卧沙场君莫笑",
                "古来征战几人回"
            ]
        },
        question: "面对生死未卜的战场，你会选择：",
        options: [
            { label: "A. 尽情享乐，活在当下", value: 'A' },
            { label: "B. 保持警醒，时刻准备", value: 'B' }
        ],
        results: {
            A: "在紧张的环境中放松自己，享受难得的欢乐时光",
            B: "保持警惕，随时准备面对可能的挑战"
        }
    },
    {
        title: "《乐游原》之望",
        background: "李商隐登上乐游原，远眺长安城",
        characters: "李商隐",
        poem: {
            title: "乐游原",
            author: "李商隐",
            content: [
                "向晚意不适",
                "驱车登古原",
                "夕阳无限好",
                "只是近黄昏"
            ]
        },
        question: "面对美好却即将消逝的事物，你会：",
        options: [
            { label: "A. 珍惜当下，尽情欣赏", value: 'A' },
            { label: "B. 感伤惋惜，思考无常", value: 'B' }
        ],
        results: {
            A: "抓住美好的瞬间，全心享受当下的美丽",
            B: "思考事物的无常，从中获得对生活的深刻理解"
        }
    },
    {
        title: "《登鹳雀楼》之视",
        background: "王之涣登上鹳雀楼，视野开阔",
        characters: "王之涣",
        poem: {
            title: "登鹳雀楼",
            author: "王之涣",
            content: [
                "白日依山尽",
                "黄河入海流",
                "欲穷千里目",
                "更上一层楼"
            ]
        },
        question: "为了获得更好的视野，你会：",
        options: [
            { label: "A. 不断攀登，追求高处", value: 'A' },
            { label: "B. 选择合适位置，满足所需", value: 'B' }
        ],
        results: {
            A: "不断挑战自我，追求更高的境界和视野",
            B: "根据实际需要，选择适合的位置，避免不必要的消耗"
        }
    },
    {
        title: "《从军行》之勇",
        background: "王昌龄描写边塞军旅生活",
        characters: "王昌龄、边塞将士",
        poem: {
            title: "从军行",
            author: "王昌龄",
            content: [
                "青海长云暗雪山",
                "孤城遥望玉门关",
                "黄沙百战穿金甲",
                "不破楼兰终不还"
            ]
        },
        question: "面对艰巨的任务，你会选择：",
        options: [
            { label: "A. 坚持到底，誓不罢休", value: 'A' },
            { label: "B. 灵活应对，量力而行", value: 'B' }
        ],
        results: {
            A: "坚定目标，不达目的不罢休，展现坚韧的毅力",
            B: "根据实际情况灵活调整，理性面对挑战"
        }
    },
    {
        title: "《送元二使安西》之别",
        background: "王维送别好友元二出使西域",
        characters: "王维、元二",
        poem: {
            title: "送元二使安西",
            author: "王维",
            content: [
                "渭城朝雨浥轻尘",
                "客舍青青柳色新",
                "劝君更尽一杯酒",
                "西出阳关无故人"
            ]
        },
        question: "与远行的朋友道别时，你会：",
        options: [
            { label: "A. 热情挽留，尽享最后时光", value: 'A' },
            { label: "B. 简短道别，避免伤感", value: 'B' }
        ],
        results: {
            A: "珍惜与朋友相处的最后时光，表达深厚的情谊",
            B: "简短告别，减少离别的伤感，祝福对方一路顺风"
        }
    },
    {
        title: "《秋词》之悲",
        background: "刘禹锡在秋天感慨人生",
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
        question: "面对常被视为悲凉的秋天，你会：",
        options: [
            { label: "A. 寻找其中的独特美丽", value: 'A' },
            { label: "B. 融入传统，感受悲秋情怀", value: 'B' }
        ],
        results: {
            A: "发现秋天独特的美丽，展现积极乐观的态度",
            B: "感受传统文化中的悲秋情怀，体会深沉的情感"
        }
    },
    {
        title: "《竹里馆》之幽",
        background: "王维在竹林中的小屋独处",
        characters: "王维",
        poem: {
            title: "竹里馆",
            author: "王维",
            content: [
                "独坐幽篁里",
                "弹琴复长啸",
                "深林人不知",
                "明月来相照"
            ]
        },
        question: "在独处时光，你更喜欢：",
        options: [
            { label: "A. 沉浸于自己的爱好", value: 'A' },
            { label: "B. 静静思考、冥想", value: 'B' }
        ],
        results: {
            A: "通过喜爱的活动充实独处时光，体验创造的乐趣",
            B: "在静默中整理思绪，感受内心的平静与智慧"
        }
    },
    {
        title: "《送友人》之情",
        background: "李白送别朋友，情深意重",
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
        question: "当好友即将远行，你会：",
        options: [
            { label: "A. 送上实用的礼物和祝福", value: 'A' },
            { label: "B. 表达深厚的情谊和不舍", value: 'B' }
        ],
        results: {
            A: "关心朋友的实际需要，送上有用的帮助",
            B: "表达内心的情感，让朋友感受到你的关心和不舍"
        }
    }
];

// 导出诗词数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poems3;
} 