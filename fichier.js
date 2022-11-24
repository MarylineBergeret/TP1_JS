function pendu(){
    let tableau = ["essai", "particule", "test", "petit", "gamin"];
    let compteur = 0;
    let random = Math.round(Math.random()*(tableau.length-1));
    let mot = tableau[random];
    let motSplit = mot.split("");
    console.log(mot);
    console.log(motSplit);
  
    let letter; 
    let placement = 0;
    let aRemplir = [];  
    for(let i=0 ; i<mot.length ; i++){
        aRemplir.push("_");
    }

    let succes = 0;
   
    while(compteur<6 && succes!=mot.length){
        letter = prompt("entrez une lettre");
    
        if(mot.includes(letter)){
            for(let i=0; i< mot.length; i++){
                if(letter == motSplit[i]){
                    aRemplir.splice(i, 1, letter);
                    placement = i + 1;
                    succes ++;
                    alert(aRemplir);   
                }                
            }
        }else{
            compteur += 1;
            alert("erreur");
        }
    }
    alert("vous avez gagné!");
}
pendu();

