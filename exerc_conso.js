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
       let raio = 10
       let hcil = 3
       let altura = 5
       let largura = 2
       let comprimento = 5
   const po = 0.005
       let vcil = calcularvolumecil(PI,raio,hcil)
       let vesf = calcularvolumeesf(raio,PI)
   let volcaps = voltotalcaps(vcil,vesf)
   let custocap =  custototalcap(po,volcaps)
   let voltanque = calcularvoltanqueret(altura,largura,comprimento)
   
   
   let custototall = custototal(voltanque,po)
   
   console.log(`o custo da sua capsula será R$ ${custocap.toFixed(2)}`)
   console.log(` o custo total é R$ ${custototall.toFixed(2)}`)
   
   
   
   }
   
   principal()