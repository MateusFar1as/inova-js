function media(x1,x2) {
    media = (x1 + x2) / 2
    if (media == 10) {
        return "Aprovado com Distinção"
    }else if (media >= 7) {
        return "Aprovado"
    }else {
        return "Reprovado"
    }
}

let maior = (x1,x2,x3) => Math.max(x1,x2,x3)

function turno(x) {
    switch(x) {
        case "matutino":
            return "Bom Dia!"
            break;
        case "vespertino":
            return "Boa Tarde!"
            break
        case "noturno":
            return "Boa Noite!"
            break
        default:
            return "Valor Inválido!"
    }
}

function aumento(salario) {
    if(salario <= 280) {
        salario *= (1 + 0.2)
    }else if(salario <= 700) {
        salario *= (1 + 0.15)
    }else if(salario <= 1500) {
        salario *= (1 + 0.1)
    }else {
        salario *= (1 + 0.05)
    }
    return salario
}