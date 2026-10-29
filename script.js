function generate() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < 10; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }

    document.getElementById('result').textContent = result;
}
