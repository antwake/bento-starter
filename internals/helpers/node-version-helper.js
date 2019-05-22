const fs = require('fs')
const compareVersions = require('compare-versions')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

// Take the required Node and NPM version from package.json
const {
  engines: { node, npm }
} = JSON.parse(fs.readFileSync('package.json', 'utf8'))

let currentNodeVersion = undefined
let currentNpmVersion = undefined

function getRequiredNodeVersion() {
  return node.match(/([0-9.]+)/g)[0]
}

function getRequiredNpmVersion() {
  return npm.match(/([0-9.]+)/g)[0]
}

async function getNodeVersion() {
  if (!currentNodeVersion) {
    try {
      const { stdout } = await exec('node --version')
      currentNodeVersion = stdout.trim()
    } catch (err) {
      throw new Error(err)
    }
  }
  return currentNodeVersion
}

async function getNpmVersion() {
  if (!currentNpmVersion) {
    try {
      const { stdout } = await exec('npm --version')
      currentNpmVersion = stdout.trim()
    } catch (err) {
      throw new Error(err)
    }
  }
  return currentNpmVersion
}

/**
 * Get Node.js version compatibility information
 * @returns {Promise<{currentVersion: String, requiredVersion: String, isCompatible: Boolean}>}
 */
async function getNodeVersionCompatibilityInfo() {
  return {
    currentVersion: await getNodeVersion(),
    requiredVersion: getRequiredNodeVersion(),
    isCompatible:
      compareVersions(await getNodeVersion(), getRequiredNodeVersion()) !== -1
  }
}

/**
 * Get NPM version compatibility information
 * @returns {Promise<{currentVersion: String, requiredVersion: String, isCompatible: Boolean}>}
 */
async function getNpmVersionCompatibilityInfo() {
  return {
    currentVersion: await getNpmVersion(),
    requiredVersion: getRequiredNpmVersion(),
    isCompatible:
      (await compareVersions(
        await getNpmVersion(),
        getRequiredNpmVersion()
      )) !== -1
  }
}

module.exports = {
  getNodeVersionCompatibilityInfo,
  getNpmVersionCompatibilityInfo
}
