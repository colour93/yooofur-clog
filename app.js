const colors = require('colors');

module.exports = clog = {
    log: (content) => {
        console.log("[日志]".magenta + " " + content);
    },
    info: (content) => {
        console.log("[信息]".cyan + " " + content);
    },
    warn: (content) => {
        console.log("[警告]".yellow + " " + content);
    },
    error: (content) => {
        console.log("[错误]".red + " " + content);
    },
    custom: (color, head, content) => {
        if (!color||!head||!content) {
            console.error("clog.custom 参数不完整")
            return;
        };
        console.log(colors(color, head) + " " + content);
    }
}