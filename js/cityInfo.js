
//TODO:所有初始图形方块位置
let cityInfo=[
    {
        id:1,
        pos:[50,51,10,10], //top left width height
        name:'王家河街胜天村',
        info:"2017年4月，武汉市启动“三乡工程”（市民下乡、能人回乡、企业兴乡）,胜天村是首批市民下乡的试点村之一。作为武汉后花园，胜天村好山好水羡煞城里人。为了迎接城里人下乡，胜天村扫榻以待。胜天村先后确定了46家意向出租户，统一贴上标牌，公布房源信息、租售价格及联系人。农房变民宿，寄托了市民们乡愁。<p>在龚家大湾，“王家河街胜天村红色文化大礼堂”“龚家大湾非物质文化传承基地”（用图片代替）。胜天村党支部将红色文化元素注入龚氏祠堂，祠堂提档升级为红色文化大礼堂：摆放桌椅，开设红色学堂、道德讲堂、四点半学校；布设文化墙，搭建百姓舞台。</p>"
    },
    {
        id:2,
        pos:[17,28,10,10], //top left width height
        name:'蔡甸街',
        info:"长轩岭街仙河店村引进武汉市石桥集团，与仙河店村132户空闲农房户主签订协议，与418户村民签订土地流转协议，盘活仙河店村集体资产500万元，带动仙河店村民人均年增收1万元。<p>姚集街杜堂村（ 全国“三乡工程”的典范）</p>姚家集街杜堂村充分利用本村的土地资源优势，引进本村能人葛天才回乡创业，成立武汉木兰花乡旅游有限公司，把新农村建设与乡村休闲游开发有机结合，该公司每年向村集体上交30万元协调费。杜堂村村民不仅可获得土地租赁费收入，而且还可就近打工就业。"
    },
    {
        id:3,
        pos:[35,53,10,12], //top left width height
        name:'木兰景区',
        info:"景区：旅游发展拉动村集体经济。依托黄陂全域旅游示范区优势，大力发展以木兰文化为核心的生态旅游，建成旅游名镇6个，旅游专业村58个，休闲农庄168个，农家乐1108余家。出租（入股）空闲农房3883套，实现年租金5265万元，有力促进了乡村产业发展。去年全区旅游接待人数达2404.3万人次，实现旅游综合收入143.1亿元，分别增长15.2%、38.6%，木兰文化生态旅游区获评“2018年最受欢迎旅游目的地”。<p>厕所革命：从 2016 年起，武汉市黄陂区连续 3 年将农村厕所改造纳入区政府为民办好的十件实事之一。近几年来，黄陂区政府投入资金过亿元用于农村厕所改造。截至去年 10 月底，黄陂区 25.76 万户农户家中卫生户厕普及率突破 90%，全区 589 个行政村已经建设完成 2183 座农村公厕，并能够持久维护。“厕所革命”是对传统观念、生活方式和环境保护的深刻革命，它不仅帮助群众养成文明如厕的良好习惯，更有助于广大群众工作生活环境的改善，不断促进社会文明进步。</p>"
    },
    {
        id:4,
        pos:[63,62,10,10], //top left width height
        name:'六指店街',
        info:"近年来，六指街着力打造党建引领产业振兴，以创新、融合、跨界的思维来定位和拓展“党建+产业振兴”这一新课题，引导农民跟着党组织走，跟着市场走，实现乡村振兴。"
    },
    {
        id:5,
        pos:[53,66,8,8], //top left width height
        name:'蔡榨街',
        info:"田园骑行绿道，“绿道”以地铁21号线开通为契机，充分利用现有基础设施，打造“地铁+田园绿道+田园综合体”新模式，带动乡村旅游业发展，吸引市民下乡，推动农业供给侧改革，加快农业转型升级，改变农村形象，增加农民收入，助力乡村振兴！"
    },
    {
        id:6,
        pos:[21,43,8,10], //top left width height
        name:'姚集街',
        info:"地处武汉临空经济核心区，位于横店的临空产业园更是黄陂经济发展的重地。临空产业园试行“企村携手双联共创”模式，企业、村（社区）党组织以“支部建联、活动联抓、实事联办”的方式，共建基层组织、共享优势资源、共创党建典型，实现企业增效、乡村振兴的双赢发展目标。<p>盘龙城开发区紧邻武汉中心城区，工商企业发达，居民集中居住的条件优越，村级积极组织提供经商、劳务等社会化服务，推进农村第三产业的发展，不断增加集体经济收入。</p>"
    },
    {
        id:7,
        pos:[31,33,12,12], //top left width height
        name:'长岭街',
        info:"通过政策扶持、村级投资和联合投资等途径，建造标准厂房、仓储物业、农贸市场、店面房等设施，获取资产经营收入。滠口街滠口村通过产权制度改革，建立社区股份合作社，大力发展仓储业，建有仓库3万平方米，每年租金收入300多万元。"
    },
    {
        id:8,
        pos:[44,24,10,10], //top left width height
        name:'李集街',
        info:"当中外客商会聚武汉，走下飞机的第一步，就踏上了黄陂土地。黄陂处于《全国国土规划总体规划纲要》的首期重点开发和长江流域经济带的中心地段，境内有亚洲最大的武汉北铁路编组站、武汉天河国际机场和武汉新港等三大国家级交通枢纽，与轨道交通、城际铁路和纵横交错的高等级公路有效衔接，与武汉主城七桥相通，三环、四环、外环相互连通，全区高等级公路路网密度位居全省第一，形成公、水、空、铁立体交通网络，使黄陂成为武汉辐射中部地区的桥头堡。"
    },
    {
        id:9,
        pos:[50,37,10,10], //top left width height
        name:'罗汉寺',
        info:"“农耕年华”是一个农业观光旅游的好地方。它的定位为“五园”:即国家级农业风情观光园、农耕文化展示园、农家生活体验园、农业科普教育园、农业科技示范园。它具备科普教育、科技示范、农事体验、旅游观光、休闲度假、运动健身、会务购物等多种功能。"
    },
    {
        id:10,
        pos:[75,55,5,5], //top left width height
        name:'三里桥',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:11,
        pos:[82,52,10,5], //top left width height
        name:'五湖街',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:12,
        pos:[77,41,6,6], //top left width height
        name:'滠口街',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:13,
        pos:[81,26,10,5], //top left width height
        name:'盘龙城',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:14,
        pos:[70,23,6,10], //top left width height
        name:'天河街',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:15,
        pos:[59,23,10,10], //top left width height
        name:'祁家湾街',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:16,
        pos:[61,43,10,10], //top left width height
        name:'前川街',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:17,
        pos:[70,33,8,8], //top left width height
        name:'横店街',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
    {
        id:18,
        pos:[71.5,49.5,4,4], //top left width height
        name:'大潭办事处',
        info:"武汉市海拔最高、面积最大、游线最多的原始生态休闲区。海拨最高处800余米，酷暑夏日（七月）平均气温20.1-20.7度，是武汉市海拔最高、方位最北、面积最大、游线最多、水体最优、植被最好、村寨最古、土产最丰的原始生态休闲首选处，也是武汉及其周边城区市民热捧的“云中水榭纳凉胜地、峡谷峰峦避暑山庄”"
    },
]
    