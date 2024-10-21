let deck = []
let option = true

while (option !== '3') {
    let menu = 'quantidade de cartas no baralho: ' + deck.length + '\n\n'
    menu += 'Escolha uma opção:\n'
    menu += '1 - Adicionarr uma carta\n'
    menu += '2 - Puxar uma carta\n'
    menu += '3 - Sair\n'

    option = prompt(menu)

    switch (option) {
        case '1':
            let newCard = prompt('digite o nome da nova carta:')
            deck.push(newCard)  
            break
        case '2':
            if (deck.length === 0) {
                alert('Não ha cartas no baralho.')
            } else {
                let drawnCard = deck.pop()
                alert('carta puxada: ' + drawnCard)
            }
            break
        case '3':
            alert('Programa encerrado.')
            break
        default:
            alert('Opção inváli')
            break
    }
}