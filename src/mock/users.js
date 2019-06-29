import Mock from 'mockjs'
let Random = Mock.Random

export default Mock.mock([
    // 模拟 admin 账户
    {
        name: '@cname()',
        account: Random.email(),
        roles:['admin']
    },
    // 模拟 normal 账户
    {
        name: '@cname()',
        account: Random.email(),
        roles:['normal']
    }
])