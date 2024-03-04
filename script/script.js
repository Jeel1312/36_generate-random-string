function generate() {
    const a = Number(document.getElementById('a').value);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let b = '';
    const charactersLength = characters.length;
    for( i= 1; i<=a; i++){
      b += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('random').innerHTML='Random string : '+ b;
}