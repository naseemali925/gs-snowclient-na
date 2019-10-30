class Logger {
    log = (...data) => {
        data.forEach((item) => {
            console.log(item);
        })
    }
}

export default new Logger();