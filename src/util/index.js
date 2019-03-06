const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const R = require('ramda')

const prefix = 'ds-cli'
const sep = chalk.gray('.')

function createrLogger(isException) {
  return function(message) {
    if (isException) {
      console.error(chalk.red(prefix), sep, message)
      process.exit(1)
    }
    console.log(chalk.white(prefix), sep, msg)
  }
}

const generateConfig = path => {
  const cfg = require(util.cwd(path))
  if (typeof cfg === 'function') {
    return cfg({})
  } else {
    return cfg
  }
}

const util = {
  logger: {
    log: createrLogger(false),
    fatal: createrLogger(true),
    red: info => console.log(chalk.red.bod(info)),
    blue: info => console.log(chalk.blue.bod(info)),
    green: info => console.log(chalk.green.bod(info))
  },
  cwd: file => path.resolve(file || ''),
  ownDir: file => path.join(__dirname, '../..', file || ''),
  getProjectName: R.memoize(_ =>
    path
      .resolve('')
      .split(path.sep)
      .pop()
  ),
  getConfig: R.memoize(_ => {
    let config = {}
    // 如果是项目集，项目集也会有个config.js
    // if
    if (fs.existsSync('../config.js')) {
      config = R.merge(config, generateConfig('../config'))
    }
  })
}
