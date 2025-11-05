

function custototal(voltanque,po){
 return (po * 100**3) * voltanque
}



function calcularvoltanqueret(altura,largura,comprimento){
    return largura * altura * comprimento

}


function custototalcap(po,volcaps){
    return volcaps * po

}



function voltotalcaps(vcil,vesf){
return vcil + vesf

}



function calcularvolumeesf(raio,PI){
return 4 * (1 / 3 ) * PI *  raio * raio * raio
}




function calcularvolumecil(PI,raio,hcil){
return PI * raio * raio * hcil


}





function principal(){

    const PI = 3.1415297
    let raio = Number(document.getElementById('raio').value)
    let hcil = Number(document.getElementById('hcil').value)
    let altura = Number(document.getElementById('altura').value)
    let largura = Number(document.getElementById('largura').value)
    let comprimento = Number(document.getElementById('comprimento').value)
    let tipo = document.getElementById('tipo').value
const po = 0.005
    let vcil = calcularvolumecil(PI,raio,hcil)
    let vesf = calcularvolumeesf(raio,PI)
let volcaps = voltotalcaps(vcil,vesf)
let custocap =  custototalcap(po,volcaps)
let voltanque = calcularvoltanqueret(altura,largura,comprimento)

let custototall = custototal(voltanque,po)


if(tipo === 'Cápsula'){

resposta.innerHTML = ``
resposta.innerHTML += `o custo da sua capsula será R$ ${custocap.toFixed(2)}`
}else if(tipo === 'Tanque'){
resposta.innerHTML = ``
resposta.innerHTML += ` o custo total é R$ ${custototall.toFixed(2)}`
}


//resposta.innerHTML = ``
//resposta.innerHTML += `o custo da sua capsula será R$ ${custocap.toFixed(2)}`
//resposta.innerHTML += ` o custo total é R$ ${custototall.toFixed(2)}`



}

