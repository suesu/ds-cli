#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const program = require('commander');
const initial = require('../packages/commands/initial');
// const start = require('../packages/commands/start');
// const build = require('../packages/commands/build');
// const upload = require('../packages/commands/upload');
// const generate = require('../packages/commands/generate');
// const analyse = require('../packages/commands/analysis');
// const git = require('../packages/commands/git');

var config = {};

// 配置文件如果存在则读取
if(fs.existsSync(path.resolve('mg.config.js'))){
    config = require(path.resolve('mg.config.js'));
}

// 创建工程
program
    .version('1.0.0','-v, --version')
    .usage('[command]')
    .command('init')
    .description('initialize your project')
    .action(initial);


// program.command('* <tpl> <project>').action(function(tpl, project) {
//   log.info('目前 DS-Web 支持以下模板：')
//   log.info('使用例子：ds-cli ds-express myproject')
//   if (tpl && project) {
//     let pwd = shell.pwd()
//     log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`)
//     clone(
//       `https://github.com/cheneyweb/${tpl}.git`,
//       pwd + `/${project}`,
//       null,
//       function() {
//         shell.rm('-rf', pwd + `/${project}/.git`)
//         log.info('模板工程建立完成')
//       }
//     )
//   } else {
//     log.error('正确命令例子：ds-cli ds-express myproject')
//   }
// })
