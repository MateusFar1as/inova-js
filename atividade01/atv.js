function reverteString(str) {
	return str.split("").reverse().join("")
}


function fibonacci(x) {
	let lista = []
	
	let a = 1
	let b = 1
	for(let i = 0; i < x; i++) {
		lista.push(a)
		let c = a + b 
		a = b
		b = c
	}

	return lista
}


function soma(lista) {
	let sum = 0
	
	for (let i = 0; i < lista.length; i++) {
		
		if (typeof lista[i] !== 'number') {
			return "Todos os elementos do array devem ser números!"
		}
		
		sum += lista[i]
	}

	return sum
}


function maior(lista) {  
	lista = lista.sort(function(a, b){return a - b})
	return lista[lista.length - 1]
}


function vogais(str) {
	const lista = str.split("")
	let sum = 0
	lista.forEach(e => {
		if(e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
			sum ++
		}
	})
	return sum
}


function vogaisEsp(v, str) {   
        const lista = str.split("")
        let sum = 0
        lista.forEach(e => {  
                if(e == v) { 
                        sum ++ 
                }
        })
        return sum
}


function equacao(a, b, c) {
	const x = b * b - 4 * a * c

	if (x > 0) {
		return [(-b + Math.sqrt(x)) / (2 * a), (-b - Math.sqrt(x)) / (2 * a)]
	} else if (x == 0) {
		return (-b / (2 * a))
	} else {
		return "Não ha solução!!"
	}
}


function somaPar(lista) {
	let sum = 0

	lista.forEach(e => {
		if (e % 2 == 0) {
			sum += e
		}
	})
	
	return sum
}


function ordena(lista) {
	return lista.sort(function(a, b){return a - b})	
}


function media(lista) {
	let sum = 0
	
	lista.forEach(e => {
		sum += e
	})

	return sum / lista.length
}


function maiorPalavra(str) {
    str = str.split(" ")
    let maior = 0
    let palavra

    str.forEach(function(str) {
        if (maior < str.length) {
            maior = str.length
            palavra = str
        }
    })

    return palavra
}
