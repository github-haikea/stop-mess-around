/*
 * Author       : OBKoro1
 * Date         : 2021-06-18 11:08:23
 * LastEditors  : OBKoro1 obkoro1@foxmail.com
 * LastEditTime : 2022-05-29 15:12:45
 * FilePath     : /stop-mess-around/deploy.js
 * Description  : 同步package.json的配置到manifest.json中
 * 根据浏览器: 修改element-ui引用配置、
 * 根据参数production: 修改package.json插件名和描述
 * koroFileheader插件
 * Copyright (c) ${now_year} by OBKoro1, All Rights Reserved.
 */

const fs = require('fs')
const AdmZip = require('adm-zip');
const { log } = require('console');

const { argv } = process
//const sourcePath = 'D:\\code\\stop-mess-around\\stop-mess-around\\dist\\Chrome-file-2.1.2.zip';
//const destinationPath = 'D:\\code\\stop-mess-around\\stop-mess-around\\dist\\Chrome-file-2.1.2';
const sourcePath = './dist/Chrome-file-2.1.2.zip';
const destinationPath = './dist/Chrome-file-2.1.2';



run()

function run() {
  //这个解压函数写在这里没有用，在这里包还没生成
    copyAndExtractZip(sourcePath, destinationPath);
}


//将生成的插件压缩包解压到当前目录下
//当前只复制了谷歌浏览器版本！！！
//注意测试时使用
function copyAndExtractZip(sourcePath, destinationPath) {
  //console.log(sourcePath)
  //console.log(destinationPath)
  // 删除 destinationPath 文件夹及其所有内容
  if (fs.existsSync(destinationPath)) {
    fs.rmSync(destinationPath, { recursive: true });
  }

  // 解压 zip 文件
  const zip = new AdmZip(sourcePath,AdmZip.s);
  zip.extractAllTo(destinationPath, true);
}