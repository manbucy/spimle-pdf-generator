const hello = async (ctx, next) => {
    ctx.body = 'hello world!'
}

module.exports = {
    hello
}