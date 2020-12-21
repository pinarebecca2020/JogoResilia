var personagem
var escolha1
var escolha2
var escolha3

function startGame() {
    personagem = parseInt(prompt('Escolha seu personagem: \n1-O(A) jovem sem noção. \n2-O idoso virado no Jiraya. \n3- O louco do alcool em gel'))
    switch (personagem) {
        case personagem = 1:
            escolha1 = prompt('Caro sem noção, foi iniciada a quarentena na sua cidade e o distanciamento social devido ao aumento de casos de COVID-19. \nMas alguns amigos seus te chamam para uma festinha na casa deles. \nVocê aceita? \n Responda somente com sim ou não.')
            if (escolha1 == 'sim') {
                escolha2 = prompt('Você foi à festa e bebeu, abraçou, viveu como em tempos sem o coronga. \n Sua mãe que está isolada com a sua avó no sítio da família precisa de ajuda. \n Você vai ajuda-lá? \n Responda somente com sim ou não.')
                if (escolha2 == 'sim') {
                    escolha3 = prompt('Você chega ao sítio de sua família, ajuda sua mãe e avó por alguns dias e volta para a cidade. \n Você continua saindo e não respeitando o distanciamento social. \n Você recebe a notícia que um amigo que frequentou a festinha testou positivo para COVID-19. \nVocê avisa sua mãe e avó e faz o teste? \nResponda somente com sim ou não. ')
                    if (escolha3 == 'não') {
                        alert('Você começa a sentir falta de ar, cansaço e coriza. Mas resolve ignorar. É apenas uma gripezinha. Enquanto isso, no sítio sua avó e mãe estão passando muito mal e são encaminhadas ao hopsital. Elas acabam na UTI e morrem após alguns dias. Você se recupera. Mas perdeu dois parentes para o coronga por falta de noção e respeito. FIM')
                    } else if (escolha3 == 'sim') {
                        alert('Sua mãe, sua avó e você testam positivo. Você e sua mãe conseguem melhorar e ficarem bem. Mas como sua avó era do grupo de risco, faleceu. FIM')
                    }
                } else if (escolha2 == 'não') {
                    escolha3 = prompt('Você permaneceu na cidade. Continua indo a festas e não respeitando o distanciamento social? \nResponda somente sim ou não')
                    if (escolha3 == 'sim') {
                        alert('Você começa a sentir falta de ar, cansaço e coriza. Mas resolve ignorar. É apenas uma gripezinha. \nAté que um dia piora muito e você vai parar no hospital. Acaba na UTI e morre sem se despedir de seus familiares. FIM')
                    }
                }
            } else if (escolha1 == 'não') {
                escolha2 = prompt(' Você não foi à festa. Sua mãe que está isolada com a sua avó no sítio da família precisa de ajuda. \n Você vai ajuda-lá? \n Responda somente com sim ou não.')
                if (escolha2 == 'sim') {
                    escolha3 = prompt('Você chega ao sítio de sua família, ajuda sua mãe e avó por algun dias e volta para a cidade. Passam alguns dias e você recebe a notícia que sua mãe e avó testaram positivo para COVID-19. \nVocê vai ao hospital? \nResponda somente com sim ou não.')
                    if (escolha3 == 'sim') {
                        alert('Você testa positivo para COVID-19, para na UTI e morre. Sua mãe e avó se recuperam. FIM')
                    }
                } else if (escolha2 == 'não') {
                    escolha3 = prompt('Você permanece na cidade. Alguns amigos seus viajaram e pediram para ficar na sua casa. \nVocê aceita? \nResponda somente com sim ou não.')
                    if (escolha3 == 'sim') {
                        alert('Você não sabia. Mas seus amigos estavam com COVID-19 e você pegou deles, foi parar no hospital e morreu. FIM')
                    } else if (escolha3 == 'não') {
                        alert('Você permanece vivo, juntamente com sua família. Enquanto que alguns amigos seus faleceram ou estão no hospital')
                    }
                }
            }
            break;
        case personagem = 2:
            escolha1 = prompt('Caro vovô/vovó, seus filhos e netos estão preocupados com a situação do coronga. E pedem para você manter a quarentena. Porém vai ter um BINGO na casa de um velho amigo. E você não aguenta ficar em casa.\nVocê vai no bingo ou permanece em casa? \nResponda somente com sim ou não')
            if (escolha1 == 'sim') {
                escolha2 = prompt('Você participa do BINGO, se diverte e não respeita o distanciamento social. Você não consegue fica trancado em casa sem fazer nada. Seu amigo chama para ir tomar uma breja ou ir a missa. \nVocê aceita? \nResponda somente com sim ou não')
                if (escolha2 == 'sim') {
                    escolha3 = prompt('Você começa a sentir falta de ar, cansaço e coriza. Seus filhos pedem para você ir ao hospital. Você vai ao hospital? \nResponda somente com sim ou não')
                    if (escolha3 == 'sim') {
                        alert('Você testou positivo para o COVID-19, e como era grupo de risco, veio a falecer. FIM')
                    } else if (escolha3 == 'não') {
                        alert('Seus sintomas pioraram e você não foi ao hospital. Seus filhos foram a sua casa dias depois e o encontraram morto em casa. FIM')
                    }
                } else if (escolha2 == 'não') {
                    escolha3 = prompt('Você começa a sentir alguns sintomas. Seus filhos pedem para você ir ao hospital. Você vai ao hospital? \nResponda somente com sim ou não')
                    if (escolha3 == 'sim') {
                        alert('Você testou positivo para o COVID-19, e como era grupo de risco, veio a falecer. FIM')
                    } else if (escolha3 == 'não') {
                        alert('Seus sintomas pioraram e você não vai ao hospital. Seus filhos foram a sua casa dias depois e o encontraram morto em casa. FIM')
                    }
                }
            } else if (escolha1 == 'não') {
                escolha2 = prompt('Você não participa do BINGO. Mas não consegue fica trancado em casa sem fazer nada. Seu amigo chama para ir tomar uma breja ou ir a missa. \nVocê aceita? \nResponda somente com sim ou não')
                if (escolha2 == 'sim') {
                    escolha3 = prompt('Você começa a sentir falta de ar, cansaço e coriza. Seus filhos pedem para você ir ao hospital. Você vai ao hospital? \nResponda somente com sim ou não')
                    if (escolha3 == 'sim') {
                        alert('Você testou positivo para o COVID-19, e como era grupo de risco, veio a falecer. FIM')
                    } else if (escolha3 == 'não') {
                        alert('Seus sintomas pioraram e você não foi ao hospital. Seus filhos foram a sua casa dias depois e o encontraram morto em casa. FIM')
                    }
                } else if (escolha2 == 'não') {
                    alert('Você não pegou COVID-19. Mas seus velhos amigos sim, e faleceram. FIM')
                }
            }
            break;
        case personagem = 3:
            escolha1 = prompt('Olá amigo do alcool em gel. Seus colegas maluquetes estão fazendo várias festas e resolvem te chamar. \nVocê aceitar ir? \nResponda somente sim ou não')
            if (escolha1 == 'sim') {
                escolha2 = prompt('Você foi à festa todo paramentado, com máscara, e banhado no alcool em gel. Não chegava perto de ninguém e aproveitou a festa à lá sua maneira.\nSua mãe não aguenta ficar dentro de casa e esta saindo para todo tipo de canto. Ela pede sua ajuda. Você aceita?\n Responda somente sim ou não')
                if (escolha2 == 'sim') {
                    escolha3 = prompt('Você foi ajudar sua mãe. E tentou ao máximo se proteger. Alguns dias depois retorna para sua casa e começa a sentir-se mal. Você vai ao hospital?\nResponda somente sim ou não.')
                    if (escolha3 == 'sim') {
                        alert('Você foi ao hospital, testou positivo para o COVID-19. Mas recuperou-se bem. Mas sua mãe veio a falecer. FIM')
                    } else if (escolha3 == 'não') {
                        alert('Você não foi ao hospital e piorou. Terminou sendo internado às pressas e veio a falecer, juntamente com sua mãe. FIM')
                    }
                } else if (escolha2 == 'não') {
                    escolha3 = prompt('Você se recusou a ir ajudar sua mãe. Visto que ela não estava respeitando as recomendações. Alguns dias depois você começa a sentir-se mal. Você vai ao hospital?\nResponda somente sim ou não.')
                    if (escolha3 == 'sim') {
                        alert('Você foi ao hospital, testou positivo para o COVID-19. Mas recuperou-se bem.FIM')
                    } else if (escolha3 == 'não') {
                        alert('Você não foi ao hospital. Piorou e terminou sendo internado às pressas. Porém recuperou-se bem. Mas sua mãe veio a falecer. FIM')
                    }
                }
            } else if (escolha1 == 'não') {
                escolha2 = prompt('Você não foi à festa.\nSua mãe não aguenta ficar dentro de casa e esta saindo para todo tipo de canto. Ela pede sua ajuda. Você aceita?\n Responda somente sim ou não')
                if (escolha2 == 'sim') {
                    escolha3 = prompt('Você foi todo paramentado, com máscara, e banhado no alcool em gel para ajudar sua mãe. Alguns dias depois retorna para sua casa e começa a sentir-se mal. Você vai ao hospital?\nResponda somente sim ou não.')
                    if (escolha3 == 'sim') {
                        alert('Você foi ao hospital, testou positivo para o COVID-19. Mas recuperou-se bem juntamente com sua mãe. FIM')
                    } else if (escolha3 == 'não') {
                        alert('Você não foi ao hospital. Piorou e terminou sendo internado às pressas. Porém recuperou-se bem. Mas sua mãe veio a falecer. FIM')
                    }
                } else if (escolha2 == 'não') {
                    alert('Você se recusou a ir ajudar sua mãe. Visto que ela não estava respeitando as recomendações. Não pegou COVID-19 e passa bem. FIM')
                }
            }
    }
}