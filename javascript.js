//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log('Seja Bem Vindo!')
}
mensagem()


//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function ola(nome){
    console.log(`O meu nome é ${nome}`)
}
ola(`Paloma`)

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console


function dados(nome, idade, estilo) {
    console.log(`Meu filho ${nome} tem ${idade} anos, nosso estilo de musica é ${estilo}`)
}
dados('Alexandre', '7', 'Envangelica') 


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console


function preferencia(filme, musica) {
    console.log(filme,musica)
}
preferencia("Quem Quer Ser um Milionário","Miley Cyrus - The Climb") 