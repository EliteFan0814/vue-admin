<template>
  <div class="login-window">
    <form id="loginForm" name="loginForm" method="post">
      <h1>登陆账号</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <label for="email">邮箱：</label>
            </td>
            <td>
              <input type="text" name="email" id="email" placeholder="请输入邮箱" v-model="account" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">密码：</label>
            </td>
            <td>
              <input type="password" name="password" id="password" placeholder="密码随便写" v-model="password" />
            </td>
          </tr>
          <tr class="subTr">
            <td>admin 账户</td>
            <td>aaa@bbb.ccc</td>
          </tr>
          <tr class="subTr">
            <td>normal 账户</td>
            <td>ddd@eee.fff</td>
          </tr>
          <tr class="subTr">
            <td colspan="2">
              <button @click.prevent = "loginSubmit" disabled = "disabled">{{ delayLoading ? '登陆中...' : '登录'}}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import userDate from '@/mock/users.js'
import '@/api/login.js'
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.login-window {
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 15px;
  /* height: 300px; */
}

form h1 {
  margin-bottom: 20px;
}
table {
  border-collapse: collapse;
}
table td {
  border: 1px solid #ccc;
  padding: 5px;
}
.subTr {
  text-align: center;
}
.subTr input {
  padding: 5px;
  width: 100%;
  cursor: pointer;
}
</style>


