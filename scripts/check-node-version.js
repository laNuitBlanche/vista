const requiredVersion = '22.14.0'
const currentVersion = process.version.slice(1) // 移除版本号前的 'v'

function compareVersions(v1, v2) {
  const v1Parts = v1.split('.').map(Number)
  const v2Parts = v2.split('.').map(Number)

  for (let i = 0; i < 3; i++) {
    if (v1Parts[i] > v2Parts[i]) return 1
    if (v1Parts[i] < v2Parts[i]) return -1
  }
  return 0
}

if (compareVersions(currentVersion, requiredVersion) !== 0) {
  console.error('\x1b[31m%s\x1b[0m', `错误: 该项目需要 Node.js 版本 ${requiredVersion}`)
  console.error('\x1b[31m%s\x1b[0m', `当前版本: ${currentVersion}`)
  console.error('\x1b[33m%s\x1b[0m', '请使用以下方法安装正确的 Node.js 版本:')
  console.error('\x1b[36m%s\x1b[0m', '使用 nvm:')
  console.error('\x1b[37m%s\x1b[0m', '  nvm install 22.14.0')
  console.error('\x1b[37m%s\x1b[0m', '  nvm use 22.14.0')
  console.error('\x1b[36m%s\x1b[0m', '或直接从 Node.js 官网下载:')
  console.error('\x1b[37m%s\x1b[0m', '  https://nodejs.org/download/release/v22.14.0/')
  process.exit(1)
}

console.log('\x1b[32m%s\x1b[0m', `✓ Node.js 版本检查通过 (${currentVersion})`)
