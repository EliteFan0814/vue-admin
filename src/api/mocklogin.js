import Mock from 'mockjs'
import _ from 'lodash'
import usersData from '@/mock/users.js'

// usersData 为一个数组，第一个为 admin 第二个为 normal
// option.body 的内容如下：
// {
//    account: aaa@bbb.ccc,
//    password: xxxxxx
//  }

// 拦截登陆请求
Mock.mock('/login', 'post', function (options) {
    // 获取用户输入的账号信息
    let accountObj = JSON.parse(options.body)
    // 过滤用户输入的账号所匹配的 mock 的数据
    let _usersData = _.filter(usersData, {
        account: accountObj.account
    })
    // 检查存在与否设置登陆状态
    if(_usersData && _usersData.length > 0){
        _usersData[0]['isLogin'] = true
    }else{
        _usersData = [{isLogin: false}]
    }

    return _usersData[0]
})

// 拦截退出请求
Mock.mock('/logout','get',function(options){
    return {
        isLogin: false
    }
})