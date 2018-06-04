const { readdirSync, lstatSync, existsSync, readFileSync, copyFileSync } = require('fs')
const { resolve, basename } = require('path')
const { EOL } = require('os')
const { spawnSync } = require('child_process')
const package = require('./package.json')


const log = []

const envlockPath = resolve('.env-lock')
const envPath = resolve('.env')

if (!existsSync(envPath)) {
  copyFileSync(envlockPath, envPath)

  log.push('.env file created from .env-lock')
}

log.forEach(message => console.log(message))

console.log(`Done lah~`)
