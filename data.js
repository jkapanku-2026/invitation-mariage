// 🔥 FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDnRVkFcXn0Fw8_0IeL5y1yNT5oSRw90iY",
  authDomain: "listeinvites.firebaseapp.com",
  databaseURL: "https://listeinvites-default-rtdb.firebaseio.com",
  projectId: "listeinvites",
  storageBucket: "listeinvites.firebasestorage.app",
  messagingSenderId: "255314969833",
  appId: "1:255314969833:web:f22535a66fe6e1c5b19c78"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 🔑 INVITES
const invites = {
  "tresor": { nom: "Cher Monsieur Trésor BUABUA" },
  "papajean": { nom: "Cher Couple Jean Kabuya" },
  "papapierre": { nom: "Cher couple Pierre TSHILUMBA" },
  "alidor": { nom: "Cher couple Aimé Alidor" },
  "manager": { nom: "Cher couple Dieudonné MUAMB" },
  "chilton": { nom: "Cher couple Chilton DIASONAMA" },
  "yves": { nom: "Cher couple Yves KAYEMBE" },
  "africa": { nom: "Cher couple Africa TSATSA" },
  "vinny": { nom: "Cher Monsieur Vinny TAWABA" },
  "christianbukasa": { nom: "Cher Monsieur Christian BUKASA" },
  "bienvenumasudi": { nom: "Cher Monsieur Bienvenu MASUDI"},
  "sylvaink": { nom: "Cher Monsieur Sylvain KALELE" },
  "ismael": { nom: "Cher Monsieur Ismael TSHIBANDA" },
  "ferly": { nom: "Cher Mr Ferly NKUNA" },
  "serge": { nom: "Cher couple Honorable Serge Beya" },
  "maxence": { nom: "Cher Couple Maxence MANDI" },
  "reaganyoka": { nom: "Cher Couple Reagan YOKA" },
  "papastephane": { nom: "Cher couple Stéphane TSHIBINKUFUA" },
  "jules": { nom: "Cher couple Jules MUTSHIBELE" },
  "prisca": { nom: "Chère Madame Prisca EKWE" },
  "sifa": { nom: "Cher couple Christelle SIFA" },
  "anny": { nom: "Mrs Annie BAMBI" },
  "therese": { nom: "Mrs Thera MISE" },
  "timothe": { nom: "Mr Timothé" },
  "freddy": { nom: "Cher couple Freddy KALALA" },
  "sandrine": { nom: "Cher Couple Sandrine BODO" },
  "josue": { nom: "Cher couple Josué PAKU" },
  "huguette": { nom: "Cher couple Huguette LEPELE" },
  "nash": { nom: "Cher couple Nash F. MOTUKE" },
  "van": { nom: "Cher Couple Mr VAN DIEBO" },
  "emile": { nom: "Cher couple Emile YAV" },
  "bienvenu": { nom: "Cher Monsieur Bienvenu LUAMBUA" },
  "jonathanmesu": { nom: "Cher Jonathan MESU" },
  "thomas": { nom: "Cher Monsieur Thomas IMWINE" },
  "alain2": { nom: "Cher Couple Alain " },
  "david": { nom: "Cher couple David BADESIRE"},
  "jonathanbongo": { nom: "Cher Couple Jonathan BONGO" },
  "nova": { nom: "Cher Monsieur Nova KWAYA" },
  "bamex": { nom: "Cher Monsieur Alexandre Bamex" },
  "olivia": { nom: "Cher couple Olivia TAKILIANI" },
  "joseph": { nom: "Cher Monsieur Joseph YANGBA" },
  "levi": { nom: "Cher couple Lévi ALOMA" },
  "james": { nom: "Cher Monsieur James" },
  "atima": { nom: "Chère madame ATIMA" },
  "rifozi": { nom: "Chère madame Rifozi EWANGO" },
  "carol": { nom: "Cher Couple Carol MATUNDU" },
  "jonathan": { nom: "Cher Monsieur Jonathan MUKENDI" },
  "grace": { nom: "Chère couple Emmanuel KENOMBE" },
  "chadrack": { nom: "Cher Monsieur Chadrack IBANDA" },
  "reagan": { nom: "Cher Monsieur Reagan MPANGU" },
  "alvine": { nom: "Cher Monsieur Alvine MABIKA" },
  "dieudonne": { nom: "Cher Monsieur Dieudonné ELAMENJI" },
  "johnny": { nom: "Cher Monsieur Johnny KABUAMBA" },
  "andré": { nom: "Cher Monsieur André BADIBANGA" },
  "valery": { nom: "Cher Monsieur Valery WALELU" },
  "oscar": { nom: "Cher Monsieur Oscar TSHIKWAYA" },
  "sam": { nom: "Cher Monsieur SAM" },
  "christ": { nom: "Cher Monsieur Christian MUHINDO" },
  "papaalain": { nom: "couple Alain MOBUTU" },
  "ntanya": { nom: "Chère madame Ntanya" },
  "deborah": { nom: "Chère Deborah Delya" },
  "deo": { nom: "Cher Monsieur Deogratias KAYONI" },
  "lisa": { nom: "Chère Lisa MUBASAO" },
  "merline": { nom: "Chère Da Merline et Promedie" },
  "christian": { nom: "Cher Monsieur Christian BEYA " },
  "iness": { nom: "Cher Monsieur Iness EPENDE " },
  "samy": { nom: "Cher Monsieur Samy MBELU" },
  "simon": { nom: "Cher Monsieur Simon Pierre KABUAYI" },
  "richardkabasele": { nom: "Cher Monsieur Richard KABASELE" },
  "ignace": { nom: "Cher Monsieur Ignace NTAMBWE" },
  "gaspakad": { nom: "Cher Monsieur Gaston Papy KADIAMBI" },
  "rachel": { nom: "Chère Madame Rachel NDOMBA" },  
  "daniel": { nom: "Cher Monsieur Daniel NTAMBWE" },
  "alphonse": { nom: "Frère Alphonse et beauf" },
  "violette": { nom: "Chère Madame Violette" },
  "gaylord": { nom: "Cher Monsieur Gaylord MUSANGU" },
  "magloire": { nom: "Chère madame Ma Gloire NSASI" },
  "ornella": { nom: "Chère Madame Ornella NTUMBA" },
  "eugene": { nom: "Cher Monsieur Eugène BUNGISA" },
  "dieudo": { nom: "Cher Monsieur Dieudonné BADIBANG" },
  "anthony": { nom: "Cher Monsieur Anthony MANEGABE" },
  "rabby": { nom: "Cher Monsieur Rabby MUFWAME" },
  "eldad": { nom: "Cher Monsieur Eldad NGAMOSOLO" },
  "richard": { nom: "Cher Couple Richard KAPEND" },
  "eddy": { nom: "Cher Monsieur Eddy NGANDJAMB" },
  "joachim": { nom: "Cher Monsieur Joachim" },
  "jemima": { nom: "Cher Mr Justin et Mme Jemima" },
  "aristote": { nom: "Cher Mr Aristote NZALE" },
  "jacob": { nom: "Cher Mr Jacob MOMEM" },
  "plamedie": { nom: "Madame Plamedie KASHALA " },
  "davina": { nom: "Madame Davina KASHALA" },
  "jackel": { nom: "Madame Jackel KASHALA" },
  "damaris": { nom: "Madame Damaris KASHALA" },
  "corneille": { nom: "Cher Monsieur Corneille TSHIBAMBA" },
  "siméon": { nom: "Cher Monsieur Siméon NYEMBO"},
  
  //INVITES VIEUX
  "benj": { nom: "Cher Couple Benj wa Kuetu"},
  "couplesadam": { nom: "Cher Couple SADAM"},
  "gentil": { nom: "Cher Couple Gentil KABASELE"},
  "fabien": { nom: "Cher Couple Fabien NGALAMULUME"},

  //INVITES FR DONAT
  "jeremie": { nom: "Cher Couple Jérémie Foudratch"},
  
  //INVITES MILCA
  "henockkabuya": { nom: "Cher couple Henock KABUYA" },
  "bokangaphilippe": { nom: "Cher couple Philippe BOKANGA" },
  "augustinmilambo": { nom: "Cher couple Augustin MILAMBO" },
  "marthetshibola": { nom: "Chère Madame Marthe TSHIBOLA" },
  "meek": { nom: "Cher couple Meek Patrick" },
  "irene": { nom: "Chères Florence et Irène" },
  "felicien": { nom: "Cher Mr Félicien" },
  "excellent": { nom: "Cher Couple Excellent KANKU" },
  "coupledieudonne": { nom: "Cher Couple Dieudonné BOPE" },
  
  

  "tantinevero": { nom: "Cher couple verro NTUMBA" }

};

// 🔑 INVITÉ COURANT & ADMIN
const params = new URLSearchParams(window.location.search);
let code = params.get("code");
const ADMIN = window.location.search.includes("admin=true");

// Si c'est un invité et non admin
if(!ADMIN){
    if (code && invites[code]) {
        const nomElement = document.getElementById("nom");
        if (nomElement) {
            nomElement.innerText = invites[code].nom; // plus "Cher/Chère"
        }
    } else {
        document.body.innerHTML = "<h2>Invitation non trouvée</h2>";
    }
}

// 📄 RSVP
let presenceChoisie = "";
let boissonsChoisie = [];

// ✅ PRESENCE
function setPresence(e, val){
    presenceChoisie = val;
    document.querySelectorAll(".presence-btn").forEach(btn => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");
}

// 🍹 BOISSON max 2
function setBoisson(e, val){
    const btn = e.currentTarget;

    if(boissonsChoisie.includes(val)){
        boissonsChoisie = boissonsChoisie.filter(b => b!==val);
        btn.classList.remove("active");
        return;
    }

    if(boissonsChoisie.length >= 2){
        alert("Maximum 2 boissons seulement");
        return;
    }

    boissonsChoisie.push(val);
    btn.classList.add("active");
}

// 📩 Envoyer RSVP
function envoyerRSVP(){
    if(!presenceChoisie) return alert("Choisir présence");
    if(presenceChoisie==="Présent" && boissonsChoisie.length===0) return alert("Choisir boisson");

    db.ref("rsvp/"+code).set({
        nom: invites[code].nom,
        presence: presenceChoisie,
        boissons: boissonsChoisie.join(", "),
        date: new Date().toLocaleString()
    });

    alert("Confirmé ✅");
}

// 👑 ADMIN PANEL
if(ADMIN){
    document.getElementById("adminPanel").style.display = "block";
    document.querySelector(".invitation").style.display = "none";
    document.querySelector(".section").style.display = "none";

    db.ref("rsvp").on("value", snapshot => {
        const data = snapshot.val();
        const tbody = document.getElementById("table");
        tbody.innerHTML = "";
        window.excelData = [];

        for(let key in data){
            const d = data[key];
            tbody.innerHTML += `
                <tr>
                  <td>${d.nom}</td>
                  <td>${d.presence}</td>
                  <td>${d.boissons}</td>
                  <td>${d.date}</td>
                </tr>
            `;
            window.excelData.push({Nom:d.nom, Présence:d.presence, Boissons:d.boissons, Date:d.date});
        }
    });
}
