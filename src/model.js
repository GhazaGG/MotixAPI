function validate(link) {
    const number = Math.floor(Math.random() *  100);

    let valid
    let message  

    if ( number % 2 !== 0 ){
        valid = "false"
        message = "Berita yang anda masukan terdeteksi berita hoax"
    }else {
        valid = "true"
        message = "Berita yang anda masukan tidak terdeteksi berita hoax"
    };

    const data = {
        valaidate :valid,
        link : link,
        message: message
    }

    return data;
}

const model = {
    validate : validate
}

module.exports = model