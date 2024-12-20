let largeurFenetre = window.innerWidth;
let form = document.querySelector('form');

function ecouterChangementLargeur(){
    window.addEventListener('resize', () =>{
        largeurFenetre = window.innerWidth
        console.log(largeurFenetre);
    })

    changementTypeSelection(largeurFenetre)
}

function changementTypeSelection(largeurFenetre){
    if(largeurFenetre < 800 ){
        let formulaire = afficherContenuReduit();
        form.innerHTML = formulaire
    } else{
        let formulaire = afficherContenuEntier();
        form.innerHTML = formulaire
    }
}

function afficherContenuReduit(){
    contenu =`<div>
            <select id="options">
                <option value="price">Sort by price</option>
                <option value="name">Sort by name</option>
                <option value="relevance">Sort by relevance</option>
            </select>
        </div>`;

    return contenu;
}

function afficherContenuEntier(){
    contenu ='<div>';
    contenu += '<input type="radio" id="price" name="exemple" value="price" checked>'
    contenu +=  '<label for="price">Sort by price</label>'
    contenu +='</div>'
    contenu += '<div>'
    contenu += '<input type="radio" id="name" name="exemple" value="name">'
    contenu += '<label for="name">Sort by name</label>'
    contenu +='</div>'
    contenu +='<div>'
    contenu +=  '<input type="radio" id="relevance" name="exemple" value="relevance">'
    contenu +=  '<label for="relevance">Sort by relevance</label>'
    contenu +='</div>'

    return contenu;
}