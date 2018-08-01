import chalk from 'chalk'

const log = (message, type = 'black', timestamp = true) => {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  console.log(timestamp ? chalk.gray(`[${hours}:${minutes}:${seconds}]`) : '', type ? chalk[type](message) : message)
}

log.success = message => {
  log(message, 'green')
}

log.error = (message, error) => {
  log(message, 'green')
  error && console.error(error)
}

log.info = message => {
  log(message, 'yellow')
}

log.line = (num = 1) => {
  console.log(''.padEnd(num, '\n'))
}

log.table = list => {
  list = list.map(item => {
    let firstKey = true
    for ( const key in item ) {
      if (firstKey) {
        item[key] = chalk.cyan(item[key])
      } else {
        item[key] = chalk.gray(item[key])
      }
      firstKey = false
    }
    return item
  })
  console.table(list)
}

export default log