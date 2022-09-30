function contar(){   
 let inicio = document.getElementById('txti')
 let fim = document.getElementById('txtf')
 let passo = document.getElementById('txtp')
 let resultado = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert('[ERRO]Escreva no contador!')
        resultado.innerHTML = 'impossivel contar!'

    }else{
        resultado.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)//transforma em numero as 
        if(p<=0){
            alert('passo invalido!')
            p = 1
        }
        if(i<f){
            for(let c = i; c<= f;c+=p){
                resultado.innerHTML+=`\u{1F449}${c} `
            }
           
        }else{
            //contagem regressiva 
            for(let c = i; c>= f;c-=p){
                resultado.innerHTML+=`\u{1F449}${c} `
            }
            
        }
        resultado.innerHTML+='\u{1F3C1}'
    }

    
    
   
    
}


// if(n1 && n2){