"use strict";(self.webpackChunk_03_webpack_study=self.webpackChunk_03_webpack_study||[]).push([[71],{299:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(467),s=r.n(n);s().defaults.baseURL="http://geek.itheima.net",s().interceptors.request.use((function(e){const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(function(e){return Promise.reject(e)})),s().interceptors.response.use((function(e){return e.data}),(function(e){return console.dir(e),401===e?.response?.status&&(alert("身份验证失败，请重新登录"),localStorage.clear(),location.href="../login/index.html"),Promise.reject(e)}));const o=s()}}]);