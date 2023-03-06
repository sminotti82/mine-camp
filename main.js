/**
 * GIOCO DEL CAMPO MINATO IL COMPUTER GENERA DELLE BOMBE CHE POSSONO VARIARE DA 16 A 30 IN BASE ALLA DIFFICOLTA' PRESCELTA 
 * L'UTENTE SCEGLIENDO DEI NUMERI DOVRA' EVITARE DI CALPESTARE I NUMERI BOMBA  COSI FACENDO VINCERA' ALTRIMENTI VINCERà IL PC
 */



//INIZIO CON IL CREARE I LIVELLI DI BOMBA FACILE 16 MEDIO 20 DIFFICILE 26

let difficoltaBombe 
let difficoltaNumeri
let bombe = []; // array che conterrà le nostre bombe 
let numeriGiocatore = []
let centoNumeri =[]
let gioca = document.querySelector('#via');

let campo = document.querySelector('.campoGioco')




for(let i = 0; i < 100; i++){
    let numero = Math.floor(Math.random()*(1,100)+1)
      if(!centoNumeri.includes(numero)){
            centoNumeri.push(numero)
      } else {
        i--
      }
}
console.log(centoNumeri);






gioca.addEventListener('click',function(){
    
    
 
     difficoltaBombe = document.querySelector('#livelloBombe').value
     difficoltaBombe = difficoltaBombe.toLowerCase()
       if(difficoltaBombe!='facile'&&difficoltaBombe!='medio'&&difficoltaBombe!='difficile'){
        document.querySelector('.cover').style.display='block'
       }



     difficoltaNumeri = document.querySelector('#livelloNumeri').value;
     difficoltaNumeri = difficoltaNumeri.toLowerCase()
     if(difficoltaNumeri!='facile'&&difficoltaNumeri!='medio'&&difficoltaNumeri!='difficile'){
        document.querySelector('.cover').style.display='block'
       }
     switch(difficoltaBombe){
      
        case 'facile': difficoltaBombe=16;
        document.querySelector('#livBomb').innerHTML=`hai scelto: livello FACILE e All'Interno della griglia di gioco  in questo livello ci saranno solo 16 numeriBomba
            evitali accuratamente per poter vincere la partita
        `
            break;
        case 'medio' : difficoltaBombe=20;
        document.querySelector('#livBomb').innerHTML=` hai scelto: livello MEDIO e All'Interno della griglia di gioco  in questo livello ci saranno  20 numeriBomba
            evitali accuratamente per poter vincere la partita
        `
            break;
        case 'difficile' : difficoltaBombe=26;
        document.querySelector('#livBomb').innerHTML=` hai scelto: livello DIFFICILE e All'Interno della griglia di gioco  in questo livello ci saranno 26 numeriBomba
            evitali accuratamente per poter vincere la partita
        `
             break
     }; 
    //-----------------------------------------------
    //-----------------------------------------------
    //-----------------------------------------------
  switch(difficoltaNumeri){
      
    case 'facile': difficoltaNumeri=5;
    document.querySelector('#livDif').innerHTML=` hai scelto: livello FACILE e All'Interno della griglia di gioco  in questo livello dovrai trovare Solo 5 numeri
     per poter vincere la partita`

        break;
    case 'medio' : difficoltaNumeri=15;
    document.querySelector('#livDif').innerHTML=` hai scelto: livello MEDIO e All'Interno della griglia di gioco  in questo livello dovrai trovare  15 numeri
    per poter vincere la partita`
        break;
    case 'difficile' : difficoltaNumeri=25;
    document.querySelector('#livDif').innerHTML=` hai scelto: livello DIFFICILE e All'Interno della griglia di gioco  in questo livello dovrai trovare  25 numeri
    per poter vincere la partita`
    }; 

  
    //-----------------------------------------------
    //-----------------------------------------------
    //-----------------------------------------------
  for(let i = bombe.length; i < difficoltaBombe;i++){
       let bomba = Math.floor(Math.random()*(1,100)+1)
    if(!bombe.includes(bomba)){
          bombe.push(bomba)
    }  else{
         i--
    }
  }

  let numeriCella = centoNumeri.map((element)=>{
             
    let div = document.createElement('div')
    div.className='cella'

    campo.append(div)
      let tag = document.createElement('span')
      tag.append(element)
    div.append(tag)
     
    div.addEventListener('mouseenter',function(){

        div.style.border='2px solid lime'
        tag.style.lineHeight='47px'
        tag.style.fontSize='1.1em'
    })
    div.addEventListener('mouseleave',function(){

        div.style.border='none'
        tag.style.lineHeight='50px'
        tag.style.fontSize='0.9em'
    })
       
     div.addEventListener('click',function(){
        let cover = document.querySelector('.cover')

            div.style.backgroundColor='green'
            div.style.color='white'

            if(!numeriGiocatore.includes(element)){
                 
                     if(bombe.includes(element)){
                       

                         cover.style.display='block'
                         document.querySelector('#results').innerHTML=`HAI PERSO MI SPIACE`;
                         document.querySelector('#punti').innerHTML=`hai inserito correttamente ${numeriGiocatore.length} numeri del gioco e sono: ${numeriGiocatore}, 
                         poi hai preso una mina che è : ${element}
                         `
                         
                     }
                     
                numeriGiocatore.push(element);

            } else {
                i--
            }

            if(numeriGiocatore.length==difficoltaNumeri){
                cover.style.display='block'
                document.querySelector('#results').innerHTML=`HAI VINTO COMPLIMENTI`;
                document.querySelector('#punti').innerHTML=`hai inserito correttamente  tutti e ${numeriGiocatore.length} numeri del gioco e sono: ${numeriGiocatore}, 
                 
                `
                cover.style.backgroundColor='green'
                 cover.style.color='white';
                 

            }
     })


         document.querySelector('#via').disabled=true
     

})

    
console.log(difficoltaBombe);
     console.log(bombe);

     console.log(difficoltaNumeri);
     console.log(numeriGiocatore);





})


document.querySelector('#rigioca').addEventListener('click',function(){


    setTimeout(() => {
          location.reload()
    }, 2000);
})

document.querySelector('#chiudi').addEventListener('click',function(){


    setTimeout(() => {
          window.close()
    }, 2000);
})