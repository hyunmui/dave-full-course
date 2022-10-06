const fs = require('fs')
const path = require('path')

fs.readFile(
  path.join(__dirname, 'files', 'starter.txt'),
  'utf8',
  (err, data) => {
    if (err) {
      throw err
    }

    console.log(data.toString())
  }
)

console.log('Hello')

fs.writeFile(
  path.join(__dirname, 'files', 'reply.txt'),
  'nice to meet you',
  (err, data) => {
    if (err) {
      throw err
    }

    console.log('Write Complete')

    fs.appendFile(
      path.join(__dirname, 'files', 'reply.txt'),
      '\n\nYes it is!',
      (err, data) => {
        if (err) {
          throw err
        }

        console.log('Append Complete')

        fs.rename(
          path.join(__dirname, 'files', 'reply.txt'),
          path.join(__dirname, 'files', 'newReply.txt'),
          (err, data) => {
            if (err) {
              throw err
            }

            console.log('Rename Complete')
          }
        )
      }
    )
  }
)

process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`)
  process.exit(1)
})
