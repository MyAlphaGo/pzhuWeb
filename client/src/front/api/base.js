import {
    userInfo
} from "os";

// 路由API管理

const base = {
    code: '/code', // 注册邮箱验证
    registerUser: '/registeruser', // 用户注册
    login: '/login', //用户登录
    timetoken: '/logintoken', //获取登录时间秘钥
    forgetPassword: '/forgetpassword', //忘记密码
    changePassword: '/changepassword', //修改密码
    qiniuToken: '/qiniutoken', //获取七牛云上传证书
    //用户信息编辑接口
    userInfo: '/person/userinfo', // 获取用户的基本信息
    uploadAvatar: '/person/uploadavatar', //上传头像信息
    uploadUserInfo: '/person/uploaduserinfo', //上传用户编辑个人信息
    getInitMessage: '/person/getInitMessage', //获取初始信息学院专业和研究方向
    getInitInfo:'/person/getInitInfo',//获取用户初始化信息
    //用户个人收藏接口
    getMenuLabel:'/collect/getmenulabel',// 获取技术标签
    getCollectList:'/collect/getcollectlist',//获取收藏列表
    cancelCollect:'/collect/cancelcollect',//取消收藏
    collectSearch:'/collect/collectsearch',//收藏夹搜索
    //用户个人界面接口
    getUserInfo:'/user/getUserInfo',//获取用户个人信息
    //成员信息界面接口
    getMemberInfo:'/member/getMemberInfo',//获取成员展示界面的信息
    //获取资源列表接口
    getResource: '/resource/getResource',//获取资源界面初始化资源
    serachResource:'/resource/searchResource',//搜索资源
    //成果展示的接口
    getAchievement:'/achievement/getAchievement',// 获取成果
    searchAchievement:'/achievement/searchAchievement',// 搜索成果
    //资源发布界面的接口
    getResourceIssue:'/resourceIssue/getResourceIssue',// 获取资源发布的信息
    uploadResource:'/resourceIssue/uploadResource',// 上传资源信息
    uploadResourceCover:'/resourceIssue/uploadResourceCover',//上传资源封面图
    delResourceCover:'/resourceIssue/delResourceCover',// 删除封面图片
    uploadResourceAttachment:'/resourceIssue/uploadResourceAttachment',//上传资源附件
    delAttachment:'/resourceIssue/delAttachment',// 删除附加
}
export default base;