function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};
function Pageprecedente(nb) {
    document.getElementById("page1").innerHTML = content_page1[(nb - 1)];
    document.getElementById("page2").innerHTML = content_page2[(nb - 1)];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
content_page1 =  [` <div class="title">
                        <img class="imgtitle" src="../Assets/titrePrez.png">
                    </div>        
                    <div class="retour">
                        <a href="../index.html"><input type="submit" value="Accueil" class="button-leave"/></a>
                    </div>`,
                    `<p> <div class="apparence">
                        <p class="label"> Apparence : <span>  Joõbachi possède une mâchoire avec des dents acérées, un dard mortel et des ailes capables de provoquer d'intenses bourrasques de vent. 
                                                            Elle possède également de magnifique poils dorés, de grandes oreilles capable de
                        </span></p>
                    </div></p>
                    <div class="flex-box">
                        <button onclick="Pageprecedente(1)">Page précédente</button>
                    </div>`,
                    `<div class="caractère">
                         <p class="label"> Caractère : <span>  Joõbachi est assez imbus d'elle même et n'a pas l'habitude de faire les choses toute seule. 
                                                            Elle est très égoiste et n'accorde de l'importance qu'aux choses qui peuvent lui rapporter.</span></p>
                        </div>
                    <div class="flex-box">
                        <button onclick="Pageprecedente(2)">Page précédente</button>
                    </div>`]
content_page2 = [`  <div class="nom">
                        <p class="label1"> Nom : <span>  Joõbachi </span></p>
                    </div>
                    <hr>
                    <div class="title">
                        <p class="label1"> Titre : <br><span>  Reine des abeilles incontesté</span></p>
                    </div>
                    <div class="flex-box">
                        <button onclick="PageSuivante(2)">Page Suivante</button>
                    </div>`,
                `<p> <div class="apparence">
                    <p class="label"><span>  percevoir le moindre son ainsi que des antennes percevant les vibrations.
                        <img class="imgappar" src="../Assets/reine des abeilles">
                    </span></p>
                </div></p>
                <div class="flex-box">
                    <button onclick="PageSuivante(3)">Page Suivante</button>
                </div>`,
                `<div class="caractère">
                    <p class="label"><span>  De ce fait, elle ne cotoye que ses servieurs et soldats abeilles. </span></p>
                </div>`]