module.exports = {
  'hooks': {
    'pre-commit': 'npm run build && git add build '
  }
}