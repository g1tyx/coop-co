/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Quantum Egg": "量子蛋",
    "Reach Rocket Fuel Eggs": "到达火箭燃料蛋",
    "Reduce Research Costs by 5%": "将研究成本降低 5%",
    "Regular Egg": "普通蛋",
    "Relativity Optimization": "相对论优化",
    "Research": "研究",
    "Rocket Fuel Egg": "火箭燃料蛋",
    "Save Game": "保存游戏",
    "Shell Fortification": "外壳防御工事",
    "Soul and Prophecy Eggs will lose their effects": "灵魂蛋和预言蛋将失去效果",
    "Soul Food": "灵魂食物",
    "Start with 1 Chicken": "从 1 只鸡开始",
    "Start with 1 Chicken on any Reset": "在任何重置时从 1 只鸡开始",
    "Stats": "统计",
    "Submit": "提交",
    "Super Material Egg": "超级材料蛋",
    "Super-Feed™ Diet": "超级饲料™ 饮食",
    "Superfood Egg": "超级食物鸡蛋",
    "Tachyon Egg": "超光速蛋",
    "Telepathic Will": "心灵感应意志",
    "Terraform Egg": "地球化蛋",
    "Thanks!": "谢谢！",
    "the contract is complete or cancelled!": "合同完成或取消！",
    "There is 50% chance for the egg to be a dinosaur egg: it either is or is not": "鸡蛋有 50% 的几率是恐龙蛋：要么是，要么不是",
    "Time Compression": "时间压缩",
    "Time Played (Includes Time Away): 0": "上场时间（包括离开时间）：0",
    "Timeline Diversion": "时间线转移",
    "Timeline Splicing": "时间线拼接",
    "To Pursue Enlightenment one must give up everything.": "要追求启蒙，必须放弃一切。",
    "Triples Egg Value": "三倍鸡蛋价值",
    "Universe Egg": "宇宙蛋",
    "Unlock at Fusion Eggs": "解锁于 融合蛋",
    "USDE Prime Certification": "USDE初级认证",
    "Last 3 Prestiges": "最近3次声望",
    "Enlightenments": "启蒙",
    "Credits": "鸣谢",
    "Crystalline Shelling": "结晶脱壳",
    "Regular": "常规",
    "Current Version - v1.1.1": "当前版本 - v1.1.1",
    "Darkmatter Egg": "暗物质蛋",
    "Delete Save (Exports)": "删除保存（导出）",
    "Dilithium Egg": "双锂蛋",
    "Discord Link!": "Discord链接！",
    "Discover Planet": "探索星球",
    "Discover Planet: Cost 50 Million Rocket Fuel Eggs": "探索星球：花费 50 M 火箭燃料蛋",
    "Discovered Eggs": "发现的鸡蛋",
    "Double Egg Density (Value)": "双倍鸡蛋密度（价值）",
    "Doubles Egg Value": "鸡蛋价值翻倍",
    "Earnings Per Egg +25%": "每个鸡蛋的收益 +25%",
    " & Egg Value + 15%": " & 鸡蛋价值 + 15%",
    "Egg Quality (Value) +25%": "鸡蛋质量（价值）+25%",
    "Eggcellent Unlocked!": "鸡蛋仔 已解锁！",
    "Eggs": "蛋",
    "Eggsistor Miniturization": "蛋奶器小型化",
    "Eggspeditions": "鸡蛋探险",
    "Enter the Path": "输入路径",
    "Epic Comfy Nests": "史诗般的舒适巢穴",
    "Epic Internal Hatcheries": "史诗内部孵化场",
    "Error NAN Display Fix, New Formatter, Auto Save is 30s Interval Now (Originally 10s), Stats Screen, Achievements": "Error NAN Display Fix, New Formatter, Auto Save is 30s Interval Now (Original 10s), Stats Screen, Achievements",
    "Even Bigger Eggs": "更大的鸡蛋",
    "Export Save": "导出存档",
    "Fusion Egg": "融合蛋",
    "Gapples2": "间隙2",
    "Gazyn": "加赞",
    "Genetic Purification": "基因纯化",
    "Github Repo!": "Github 仓库！",
    "Go on an Eggspedition": "进行一次鸡蛋探险",
    "Graviton Coating": "引力子涂层",
    "Graviton Egg": "重力蛋",
    "Hen House A/C": "母鸡屋空调",
    "Hover over a planet to see what it is": "悬停在一个星球上，看看它是什么",
    "Hover Over An Image to See Its Description": "将鼠标悬停在图像上以查看其描述",
    "Immortality Egg": "永生蛋",
    "Import Save": "导入保存",
    "Improved Genetics": "改进的遗传学",
    "Increase Chicken Gain by 5%": "增加鸡增益 5%",
    "Increase Egg Value by 5%": "鸡蛋价值增加 5%",
    "Increase Soul Egg Bonus by 1%": "增加魂蛋奖励 1%",
    "Increases Egg Value +1%": "增加鸡蛋价值 1%",
    "Internal Hatcheries": "内部孵化场",
    "Internal Hatchery Expansion": "内部孵化场扩建",
    "Internal Hatchery Upgrades": "内部孵化场升级",
    "Lab Upgrade": "实验室升级",
    "10x Egg Value": "10x 鸡蛋价值",
    "!Warning! - Journeying to any planet will cause a reset on the main farm.": "！警告！ - 前往任何星球都会导致主农场重置。",
    "!When you start a contract you will do a prestige reset and be unable to leave the egg until": "!当你开始一个合同你会做一个声望重置并且不能离开鸡蛋直到",
    "[MAJOR UPDATE]": "[主要更新]",
    "A Californian Energy Shortage means more demand for Fusion Eggs": "加州能源短缺意味着对融合蛋的需求增加",
    "Accept": "接受",
    "Accounting Tricks": "会计技巧",
    "AI Egg": "人工智能蛋",
    "All Research Bonuses Compound": "所有研究奖金复合",
    "Alpha Versions": "阿尔法版本",
    "Antimatter Egg": "反物质蛋",
    "Are you sure?": "你确定吗？",
    "Atomic Purification": "原子净化",
    "Automate Tier I-V Research": "自动化 Tier I-V 研究",
    "Automate Tier VI-X Research": "自动化 Tier VI-X 研究",
    "Automated Tier XI-XIV Research": "自动化第 XI-XIV 层研究",
    "Automatic Promotions": "自动进阶",
    "Best Egg: Regular": "最好的鸡蛋：普通",
    "Bigger Eggs": "更大的鸡蛋",
    "Click to Hatch +1 Chicken": "点击孵化+1鸡",
    "Comfortable Nests": "舒适的窝",
    "Contracts": "合同",
    "DONT EAT SCRAMBLED NEBULA EGGS!!! They taste terrible…": "不要吃炒星云蛋！！！它们尝起来很糟糕……",
    "Egg": "蛋",
    "Egg is the next mechanic": "蛋 是下一个技工",
    "eggineer gaming": "蛋蛋游戏",
    "eggs! get your eggs here!": "蛋！把你的鸡蛋拿过来！",
    "Game Loaded": "游戏加载",
    "Game Saved": "游戏已保存",
    "I don't think this will meet FDA standards.": "我认为这不会符合 FDA 标准。",
    "I heard that there's a secret prophecy egg stash at https://discord.gg/kFYgun8Yqs": "我听说在 https://discord.gg/kFYgun8Yqs 有一个秘密的预言蛋藏匿处",
    "It takes 3000 grains to produce an egg": "生产一个鸡蛋需要3000粒谷物",
    "Machine Learning Incubators": "机器学习孵化器",
    "Matter Reconfiguration": "物质重构",
    "Medical Egg": "医用鸡蛋",
    "Multiversal Layering": "多重分层",
    "Nebula Egg": "星云蛋",
    "Neural Linking": "神经链接",
    "New things have been added since last time": "自上次以来已添加新内容",
    "NEWS BREAKING: EGG INC WILL RISE AGAIN, YOU CAN NOT STOP US. WEghuiuofvjbsvuiosrfb Apologies for that, there's been a break in at the office. Have a good day.": "新闻快讯：EGG INC 将再次崛起，您无法阻止我们。 WEghuiuofvjbsvuiosrfb 抱歉，办公室有人闯入。祝你有美好的一天。",
    "Not Discovered": "未发现",
    "Superfood": "超级食物",
    "No!": "否！",
    "Nutritional Supplements": "营养补充剂",
    "Other Prestige Stats": "其他声望统计",
    "Padded Packaging": "填充包装",
    "Prestige": "声望",
    "Prestige Bonus": "声望奖励",
    "Prodigy Egg": "神童蛋",
    "Programmers": "程序员",
    "Promote to Next Egg": "进阶到下一个蛋",
    "Promotion": "进阶",
    "Off": "关闭",
    "Public Release": "公开发布",
    "That sounds like a skill issue": "感觉是技能问题",
    "This game takes only a few moments to beat if you know how to use the console.": "如果您知道如何使用控制台，则只需几分钟即可完成此游戏。",
    "This is the game, egg inc. is the copy.": "这是游戏，鸡蛋公司。是一个副本。",
    "VoidCloud": "虚云",
    "Welcome back gamer!": "欢迎回来游戏玩家！",
    "Welcome Back!": "欢迎回来！",
    "Yes!": "是的！",
    "You will be unable to prestige as well as you will be unable to leave the enlightenment egg.": "您将无法获得声望，也将无法离开启蒙蛋。",
    "which came first, the egg or the egg?": "先有蛋还是先有蛋？",
    "Cluck Cluck": "咯咯哒咯咯哒",
    "Egg prices have dropped due to this one guy having one million chickens WTF!": "因为这个人有一百万只鸡WTF，鸡蛋价格下降了！",
    "Florida man has broken several walls, the costs are too expensive to fix! (idk)": "佛罗里达人破了几堵墙，修起来太贵了！ （身份证）",
    "New Coop Co update! Changelog 420.69: Added 4,736th egg along with new prestige, Going Outside! This prestige will reset the game and give you no boosts!": "新的合作公司更新！ 更新日志 420.69：添加了第 4,736 个鸡蛋以及新的声望，Going Outside！ 这个声望会重置游戏并且不会给你任何提升！",
    "not using scientific notation, laugh at this user": "不使用科学计数法，嘲笑这个用户",
    "The USDE were bribed.": "USDE 被贿赂了。",
    "1 star game sux!": "1星游戏sux！",
    "- All Eggs, 28 \"Common\" Researches, Egg Promotion System": "- 所有鸡蛋，28个“共同”研究，鸡蛋促销系统",
    "- Contracts,Automation and Internal Hatchery Buff": "- 合同、自动化和内部孵化爱好者",
    "- Egg Promotion Progress Bar, Egg Promotion and Prestige Buttons Hidden When In Contract, and Slightly Better Code (by gapples2)": "- 鸡蛋促销进度条、鸡蛋促销和声望按钮在合同中隐藏，以及稍微更好的代码（by gapples2）",
    "- Enlightenments, Eggpeditions, Notifications via Notify.js, Tier XI-XIV Auto,": "- 启蒙、Eggpeditions、Notify.js 通知、Tier XI-XIV Auto、",
    "- New Formatter (by Dimava), Optimized Common Research Buyer and Optimized Prophecy Egg Reward (by Gazyn)": "- 新格式化程序（由 Dimava 提供）、优化的通用研究买家和优化的预言蛋奖励（由 Gazyn 提供）",
    "- Prestige!": "- 声望！",
    "Acquire 1 Million Knowledge": "获得 100 万知识",
    "Complete 10 Contracts": "完成 10 份合同",
    "Complete a Thousand Contracts": "完成一千份合约",
    "Completed a Contract": "完成了一份合同",
    "Contract Notifications: On": "合同通知：开启",
    "If I had a nickel for every chicken you had right now, I'd have 144.1 nickles.": "如果你现在每只鸡我都有一个镍币，我会有 144.1 个镍币。",
    "Making omelets with rocket eggs is contra-indicated.": "用火箭蛋做煎蛋卷是禁忌的。",
    "Newsticker: On": "滚动新闻：开",
    "Notation: Mixed Sci": "符号：混合科学",
    "Salt the fried eggs before frying but the boiled eggs after boiling": "煎鸡蛋前先加盐，煮鸡蛋后先加盐",
    "Start Playing!": "开始玩！",
    "Anti-Eggers continue protests at the FDA stating \"They put hormones into our eggs!\" Which, while entirely true, doesn't mean they have to say it, that's just mean.": "反鸡蛋人士 继续向 FDA 提出抗议，声明“他们将激素放入我们的鸡蛋中！”虽然完全正确，但这并不意味着他们必须说出来，这只是卑鄙的。",
    "Breaking News: Florida Man used his rocket powers to eat every single type of egg. Has gone into a coma-like state.": "突发新闻：佛罗里达人用他的火箭力量吃掉了每一种鸡蛋。已经进入昏迷状态。",
    "BREAKING NEWS: Please stop breaking the news it really hurts :(": "突发新闻：请停止发布这真的很伤人的消息:(",
    "BREAKING NEWS: The eggs have come together to create a black hole of matter. This new development has, instead of causing farmer to stop creating chicken farms, caused farm production rates to skyrocket!": "突发新闻：这些鸡蛋聚在一起形成了一个物质黑洞。这一新发展不仅没有导致农民停止建立养鸡场，反而导致农场生产率飙升！",
    "Can't time skip your way out of this one.": "不能时间跳过这个。",
    "Chicken nugget farmers have stolen some of your chickens!": "鸡块农民偷了你的一些鸡！",
    "Click here for free prophecy egg": "点击这里免费预言彩蛋",
    "Come back tomorrow for your daily egg news.": "明天回来看看你的每日鸡蛋新闻。",
    "Communism Doesn't Work": "共产主义行不通",
    "Eggcelent gameplay.": "蛋清 游戏玩法。",
    "Florida man ends up exploring the entire local group": "佛罗里达男子最终探索了整个当地团体",
    "Florida Man has broken the fourth wall and is breaking the further walls, I repeat, Florida Man has broken the fourth wall and is working on the others!": "佛罗里达人已经打破了第四堵墙，并且正在打破更多的墙，我再说一遍，佛罗里达人已经打破了第四堵墙，并且正在研究其他的墙！",
    "Game is still being worked on": "游戏还在制作中",
    "gge": "咯咯哒",
    "how do people buy eggs that cost trillions of dollars?": "人们如何购买价值数万亿美元的鸡蛋？",
    "I don't remember THIS in the game, is this a copy?!": "我不记得游戏里有这个，这是副本吗？！",
    "If I had a nickel for every chicken you had right now, I'd have 64.35 K nickles.": "如果你现在每只鸡都有一个镍币，我会有 64.35 K 镍币。",
    "If you ever feel worthless, just remember that you're worth 2,200,000 regular eggs.": "如果您觉得自己一文不值，请记住您值 2,200,000 个普通鸡蛋。",
    "If you get rid of everything when you prestige, why do people still buy regular eggs???": "声望一扫而光，为什么还有人买普通的鸡蛋？？？",
    "If you like games like this, please go anywhere else but the Reddit to find more like it!": "如果您喜欢这样的游戏，请到 Reddit 以外的任何地方寻找更多类似的游戏！",
    "Importing Cancer will not do anything. They have been blocked from national trade.": "导入癌症不会做任何事情。他们已被禁止进行国家贸易。",
    "Inflation continues to rise as the country struggles to give people enough money to buy more eggs.": "随着该国努力让人们有足够的钱购买更多的鸡蛋，通货膨胀继续上升。",
    "Jacorb was right, egg is the next mechanic": "Jacorb 是对的，鸡蛋 是下一个技工",
    "Join the discord for one free egg.": "加入 discord 即可获得一个免费鸡蛋。",
    "literally no one ever: we control timelines for more eggs": "从来没有人：我们控制更多鸡蛋的时间表",
    "Logically, none of these upgrades should work.": "从逻辑上讲，这些升级都不应该起作用。",
    "News Inc. is sad to announce that our former CEO has died of Ligma and has been replaced by Mike Hawk.": "新闻公司 很遗憾地宣布，我们的前任 CEO 因 Ligma 去世，并由 Mike Hawk 接任。",
    "No chickens?": "没有鸡？",
    "All these damn eggs and I still don't know which came first. Chicken, or Egg. The mystery still stands.": "所有这些该死的鸡蛋，我仍然不知道哪个先出现。 鸡肉，或者鸡蛋。 谜团依然存在。",
    "EGGS!!!": "蛋！！！",
    "Game is no longer being worked on": "游戏不再开发",
    "If I had a nickel for every chicken you had right now, I'd have 2396 nickles.": "如果你现在每只鸡我都有一个镍币，我会有 2396 个镍币。",
    "Is it truly an egg or are you just imagining an egg on the screen?": "它真的是一个鸡蛋，还是你只是在屏幕上想象一个鸡蛋？",
    "Medical": "医疗",
    "Press Ctrl+D to add an egg onto your bar": "按 Ctrl+D 将鸡蛋添加到您的地址栏",
    "The e in e10 stands for eggs. You don't have 10 Trillion eggs, you only have 10.": "e10 中的 e 代表鸡蛋。 你没有 10 Trillion 鸡蛋，你只有 10 个。",
    "There are so many types of eggs, so why are soul eggs any different?": "蛋的种类那么多，为什么灵魂蛋有什么不同呢？",
    "We here at News Inc. don't actually like eggs.": "我们在新闻公司实际上并不喜欢鸡蛋。",
    "If I had a nickel for every chicken you had right now, I'd have 6301 nickles.": "如果你现在每只鸡我都有一个镍币，我会有 6301 个镍币。",
    "We invented the news ticker, the \"Matter\" game or whatever it's called stole our idea": "我们发明了新闻自动收报机，“物质”游戏或任何所谓的东西偷走了我们的想法",
    "[1] - Eggcellent": "[1] - 蛋黄酱",
    "[14] - Anti Anti Matter": "[14] - 反反物质",
    "[15] - Moar Matter": "[15] - 摩尔物质",
    "[16] - AEgg": "[16] - AE蛋",
    "[17] - Nebulous": "[17] - 朦胧",
    "[18] - Universal Problem": "[18] - 普遍问题",
    "[19] - Egglightenment": "[19] - 蛋光启蒙",
    "[2] - Superegg": "[2] - 超级蛋",
    "[21] - Contractual": "[21] - 合同",
    "[22] - Contractful": "[22] - 契约",
    "[23] - Contractor": "[23] - 承包商",
    "[24] - Soulful I": "[24] - 深情 I",
    "[25] - Soulful II": "[25] - 深情 II",
    "[26] - Soulful III": "[26] - 深情 III",
    "[27] - Soulful IV": "[27] - 深情 IV",
    "[28] - Prophet I": "[28] - 先知 I",
    "[29] - Prophet II": "[29] - 先知 II",
    "[3] - Meggdical": "[3] - 医疗保健",
    "[30] - Prophet III": "[30] - 先知 III",
    "[31] - Prophet IV": "[31] - 先知 IV",
    "[32] - Planetary I": "[32] - 行星 I",
    "[33] - Planetary II": "[33] - 行星 II",
    "[34] - Planetary III": "[34] - 行星 III",
    "[35] - Planetary IV": "[35] - 行星 IV",
    "[36] - Planetary V": "[36] - 行星 V",
    "[37] - Planetary VI": "[37] - 行星 VI",
    "[38] - Intelligent": "[38] - 智能",
    "[39] - Genius": "[39] - 天才",
    "[4] - Rockegg Fuel": "[4] - 洛克燃料",
    "[40] - Einstein": "[40] - 爱因斯坦",
    "[41] - True Egglightenment": "[41] - 真正的启蒙",
    "[5] - Uber Material": "[5] - 优步材料",
    "[6] - Fused": "[6] - 融合",
    "[7] - Quantum Flux": "[7] - 量子通量",
    "[8] - Fountain of Youth": "[8] - 青春之泉",
    "[9] - Time and Space": "[9] - 时空",
    "Acquire 1 Billion Knowledge": "获得 1 Billion 知识",
    "Acquire 1 Thousand Knowledge": "获得 1000 知识",
    "Acquire 1 Trillion Knowledge": "获得 1 Trillion 知识",
    "Complete 100 Contracts": "完成 100 份合同",
    "[10] - Gravity Well": "[10] - 重力井",
    "[11] - Diliuted": "[11] - 稀释",
    "[12] - Prodigy Child": "[12] - 神童",
    "[13] - Terraforming Mars": "[13] - 地球化火星",
    "[20] - Contracted": "[20] - 签约",
    "Excellent! Excellent! Egg salad! And sandwich.": "优秀！ 优秀！ 鸡蛋沙拉！ 还有三明治。",
    "We egg on you to reach the top egg before taking Contracts": "在接受合同之前，我们会鼓励您达到顶蛋",
    "What do you mean Idle Games have time walls?!?": "你是什​​么意思空闲游戏有时间墙？！？",
    "What happened to all the chickens from the last farm?": "上次农场的所有鸡都怎么了？",
    "where do we store all these chickens": "我们在哪里存放所有这些鸡",
    "Why did the egg cross the road? Scientists are still trying to figure that one out.": "为什么鸡蛋会过马路？科学家们仍在试图弄清楚这一点。",
    "Yes, we know what we are. No, we're not gonna put a rick roll link, that's just childish.": "是的，我们知道我们是什么。不，我们不会放 rick roll 链接，那太幼稚了。",
    "you know this kinda reminds me of antimatter dimensions. i mean, think about it, there are big numbers early on, there's a prestige function, i mean, c'mon this is such a copy! shame on you.": "你知道这让我想起了反物质维度。我的意思是，想想看，早期的数字很大，有声望功能，我的意思是，拜托，这就是这样的副本！你太无耻了。",
    "Rockegg Fuel Unlocked!": "洛克燃料解锁！",
    "Rocket Fuel": "火箭燃料",
    "Scientist dumbfounded after Florida Man flies to Mars, \"how\"": "佛罗里达人飞往火星后，科学家傻眼了，“如何”",
    "So how exactly do we make money off this? Are people actually eating “soul eggs”???": "那么我们究竟如何从中赚钱呢？人们真的在吃“灵魂蛋”吗？？？",
    "Story not included.": "故事不包括在内。",
    "the egg is very egg": "鸡蛋很鸡蛋",
    "the game isn't broken, you are": "游戏没有坏，你是",
    "There's no way he managed to fry rice": "他没办法炒饭",
    "use alt+f4 to instantly promote to the next egg": "使用 alt+f4 立即提升到下一个鸡蛋",
    "\"Genetic Purification\"...? Isn't that just eugenics?": "“基因净化”……？这不就是优生学吗？",
    "BREAKING NEWS:  There are too many eggs": "突发新闻：鸡蛋太多了",
    "BREAKING NEWS: Egglon Musk has managed to reach mars with his revolutionary new rocket ship fuel… umm am i reading this right… eggs? how": "突发新闻：Egglon Musk 已经用他革命性的新型火箭飞船燃料成功到达了火星……嗯，我没看错……鸡蛋？如何",
    "Breaking: local man manages to make deviled eggs from enlightenment eggs, says they “showed him the truth about reality. and also smelled terrible.”": "打破：当地人设法用启蒙蛋制作魔鬼蛋，称他们“向他展示了关于现实的真相。而且闻起来很糟糕。”",
    "Is there an echo in here?": "这里有回声吗？",
    "Meggdical Unlocked!": "已解锁！",
    "One of your chickens crossed the road, you now have one less chicken.": "你的一只鸡过马路，你现在少了一只鸡。",
    "You mean you don't have 1e308 Soul Eggs? What, did you just start or something?": "你的意思是你没有1e308魂蛋？ 什么，你刚开始还是什么？",
    "You would think that immortality would be cooler than an AI, but you would be wrong.": "你会认为永生比人工智能更酷，但你错了。",
    "Well obviously the chicken came first. There's the button right there.": "很明显，鸡肉是第一位的。 按钮就在那里。",
    "What kind of chicken makes Universe Eggs?": "宇宙蛋是用什么鸡做的？",
    "Fusion": "融合",
    "Super Material": "超级材料",
    "Uber Material Unlocked!": "优步材料解锁！",
    "Are you sure you want to prestige?": "你确定要声望吗？",
    "This will reset all progress for Soul Eggs": "这将重置所有进度并获得魂蛋",
    "Notation: Sci": "符号：科学",
    "Fused Unlocked!": "融合已解锁！",
    "Save File Exported to Clip Board": "存档已导出到剪贴板",
    "Are you sure you want to reset your game?": "您确定要重置游戏吗？",
    "Contract Notifications: Off": "合同通知：关闭",
    "Newsticker: Off": "滚动新闻：关闭",
    "This will export your savefile to the clipboard but delete your save game in local storage.": "这会将您的存档导出到剪贴板，但会删除本地存储中的游戏存档。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "BREAKING NEWS: Florida Man eats rocket fuel egg": "突发新闻：佛罗里达男子吃火箭燃料蛋",
    "Dimava": "Dimava",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'IX': 'IX',
    'IV': 'IV',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Tier ": "层级 ",
    "Research-": "研究-",
    "Time in Current Prestige: ": "本轮声望耗时：",
    "Current Egg: ": "当前的蛋：",
    "Knowledge: ": "知识：",
    "Enlightenment ": "启蒙 ",
    "Egg Value +": "鸡蛋价值 +",
    "Egg Laying Rate": "产蛋率",
    "Current Egg: ": "当前鸡蛋：",
    "Best Money: $": "最佳资金：$",
    "Chickens: ": "鸡：",
    "Changelog :": "更新日志：",
    "Contract-": "合同-",
    "Promotion Auto: ": "自动推广：",
    "Prophecy Eggs: ": "预言蛋：",
    "Buy Amount: ": "购买数量：",
    "Chicken Gain: ": "鸡增益：",
    "Next Egg: ": "下一个蛋：",
    "Best Chickens: ": "最佳的鸡：",
    "Best Prophecy Eggs: ": "最佳预言蛋：",
    "Best Soul Eggs: ": "最佳魂蛋：",
    "Contracts Completed: ": "完成的合同：",
    "Discover at ": "发现于 ",
    "prophecy eggs are not giving prophecies ": "预言蛋不会给出预言",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " Automator": " 自动机",
    " Auto: Off": " 自动：关闭",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\$([\d\.]+) K$/,
    /^\$([\d\.]+) M$/,
    /^\$([\d\.]+) B$/,
    /^\$([\d\.]+) T$/,
    /^\$([\d\.]+) Qa$/,
    /^\$([\d\.]+) K\/s$/,
    /^\$([\d\.]+) M\/s$/,
    /^\$([\d\.]+) B\/s$/,
    /^\$([\d\.]+) T\/s$/,
    /^\$([\d\.]+) Qa\/s$/,
    /^\$([\d\.]+)\/s$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^If I had a nickel for every chicken you had right now, I'd have (.+) nickles.$/, '如果我有一些镍币，等于你现在拥有的鸡，我会有 $1 镍币。'],
    [/^You were gone for (.+) seconds$/, '你离开了 $1 秒'],
    [/^Unlock the (.+) Egg$/, '解锁第 $1 种蛋'],
    [/^Unlock the (.+) Planet$/, '解锁第 $1 个星球'],
    [/^Get (.+) Soul Eggs$/, '获得 $1 魂蛋'],
    [/^Get (.+) Prophecy Eggs$/, '获得 $1 预言蛋'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Hey, congrats on (.+)$/, '嘿，恭喜您获得 $1！'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) Chickens\/min$/, '$1 鸡\/分钟'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\+([\d\.,]+) Chickens\/min$/, '\+$1 鸡\/分钟'],
    [/^\+([\d\.,]+)\% More Soul Eggs per Prestige$/, '每次声望 \+$1\% 魂蛋'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Prestige: (.+) Soul Eggs$/, '声望：$1 魂蛋'],
    [/^Reward: (.+) Soul Eggs$/, '奖励：$1 点数'],
    [/^Prestige (.+): (.+) Soul Eggs$/, '声望 $1：$2 魂蛋'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) Soul Eggs$/, '成本：$1 魂蛋'],
    [/^Value: (.+)$/, '价值：$1'],
    [/^Cost: \[MAXED\]$/, '成本：\[已最大\]'],
    [/^Cost: (.+)$/, '成本：$1'],
    [/^Value: \$([\d\.]+) (.+)$/, '价值：\$$1 $2'],
    [/^Soul Eggs: (.+)$/, '魂蛋：$1'],
    [/^Unlock At: (.+)$/, '解锁于：$1'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Level: (.+)\/(.+)$/, '等级：$1\/$2'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
]);