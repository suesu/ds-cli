#! usr/bin/env node

const clone = require('git-clone'),
  cmdInit = require('../lib/command/init')
// const program = require('commander')
// const shell = require('shelljs')
// const log = require('tracer').colorConsole()

const version = require('../package').version
program.version(version, '-v, --version')

program
  .command('init')
  .alias('i')
  .action(cmd => {
    cmdInit()
  })

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
