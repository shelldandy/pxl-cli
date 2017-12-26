#!/usr/bin/env node
const open = require('opn')
const opn = site => open(site, {wait: false})

const args = process.argv.slice(2)

const COMMANDS = [
  'code',
  'gitlab',
  'money',
  'dashboard',
  'slack',
  'go'
]

// Find the first right command
const scriptIndex = args.findIndex(
  x => COMMANDS.includes(x)
)

// The right command or the first one...
const script = scriptIndex === -1 ? args[0] : args[scriptIndex]

switch (script) {
  case 'code':
  case 'gitlab':
    opn('https://code.pixel2html.com/')
    break
  case 'dashboard':
    opn('https://pixel2html.com/dashboard')
    break
  case 'money':
    opn('https://pixel2html.com/payroll')
    break
  case 'slack':
    opn('https://pixel2html.slack.com/')
    break
  case 'go':
    opn('https://pixel2html.com/')
    break
  default:
    console.log('Unknown command "' + script + '"')
    console.log('Available commands are:')
    COMMANDS.map(c => { console.log(c) })
    break
}
