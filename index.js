const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
check = (value) => {
    const check = value.match(/\S+@\S+\.\S+/);
    if(check){
        const email = check[0].toString();
        console.log(`berisi alamat surel, ${email}`)
    }else{
        console.log(`tidak berisi alamat surel`)
    }
}
readline.question(`Masukkan String?`, (string) => {
    check(string)
    readline.close()
})