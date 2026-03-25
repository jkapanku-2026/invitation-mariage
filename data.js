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
  "jeremie": { nom: "Cher couple Honorable Jérémie Foudratch" },
  "papajean": { nom: "Cher Couple Jean Kabuya" },
  "papapierre": { nom: "Cher couple Pierre TSHILUMBA" },
  "alidor": { nom: "Cher couple Aimé Alidor" },
  "manager": { nom: "Cher couple Dieudonné MUAMB" },
  "chilton": { nom: "Cher couple Chilton DIASONAMA" },
  "jacob": { nom: "Cher Monsieur Jacob MOMEM" },
  "yves": { nom: "Cher couple Yves KAYEMBE" },
  "africa": { nom: "Cher couple Africa TSATSA" },
  "jeannoel": { nom: "Cher Monsieur Jean Noel MATUMO" },
  "fanny": { nom: "Cher Madame Fanny NGALULA" },
  "grady": { nom: "Cher madame Grady LULUA" },
  "ismael": { nom: "Cher Monsieur Ismael TSHIBANDA" },
  "donat": { nom: "Cher couple Donat KALALA" },
  "serge": { nom: "Cher couple Honorable Serge Beya" },
  "donat": { nom: "Cher couple Donat KALALA" },
  "francine": { nom: "Cher madame Francine BOPE" },
  "papastephane": { nom: "Cher couple Stéphane TSHIBINKUFUA" },
  "jules": { nom: "Cher couple Jules MUTSHIBELE" },
  "prisca": { nom: "Chère Madame Prisca EKWE" },
  "sifa": { nom: "Cher couple Christelle SIFA" },
  "anny": { nom: "Mrs Annie BAMBIE" },
  "therese": { nom: "Mrs Thera MISE" },
  "timothe": { nom: "Mr Timothé" },
  "freddy": { nom: "Cher couple Freddy KALALA" },
  "sandrine": { nom: "Cher Couple Sandrine BODO" },
  "josue": { nom: "Cher couple Josué PAKU" },
  "huguette": { nom: "Cher couple Huguette LEPELE" },
  "nash": { nom: "Cher couple Nash F. MUTOKE" },
  "van": { nom: "Cher Couple Mr VAN" },
  "emile": { nom: "Cher couple Emile YAV" },
  "bienvenu": { nom: "Cher Monsieur Bienvenu LUAMBUA" },
  "chirac": { nom: "Cher Monsieur Chirac LUTANDILA" },
  "thomas": { nom: "Cher Monsieur Thomas IMWINE" },
  "freddy2": { nom: "Monsieur Freddy TSHINDINATSHI" },
  "Gaspard": { nom: "Cher Monsieur Gaspard NSIMBA" },
  "jonathanbongo": { nom: "Cher Monsieur Jonathan BONGO" },
  "nova": { nom: "Cher Monsieur Nova" },
  "bamex": { nom: "Cher Monsieur Alexandre Bamex" },
  "olivia": { nom: "Cher couple Olivia Tuku" },
  "joseph": { nom: "Cher Monsieur Joseph" },
  "levi": { nom: "Cher couple Lévi ALOMA" },
  "atima": { nom: "Chère madame ATIMA" },
  "rifozi": { nom: "Chère madame Rifozi EWANGO" },
  "carol": { nom: "Cher Couple Carol MATUNDU" },
  "jonathan": { nom: "Cher Monsieur Jonathan MUKENDI" },
  "grace": { nom: "Chère couple Emmanuel KENOMBE" },
  "chadrack": { nom: "Cher Monsieur Chadrack IBANDA" },
  "reagan": { nom: "Cher Monsieur Reagan MPANGU" },
  "Aris": { nom: "Cher Monsieur Aristote NZALE" },
  "dieudonne": { nom: "Cher Monsieur Dieudonné ELAMENJI" },
  "johnny": { nom: "Cher Monsieur Johnny KABUAMBA" },
  "andré": { nom: "Cher Monsieur André BADIBANGA" },
  "sam": { nom: "Cher Monsieur SAM" },
  "christ": { nom: "Cher Monsieur Christian MUHINDO" },
  "papaalain": { nom: "couple Alain MOBUTU" },
  "ntanya": { nom: "Chère madame Ntanya" },
  "deborah": { nom: "Chère Deborah Delya" },
  "lisa": { nom: "Chère Lisa MUBASAO" },
  "merline": { nom: "Chère Da Merline et Promedie" },
  "christian": { nom: "Cher Monsieur Christian BEYA " },
  "samy": { nom: "Cher Monsieur Samy MBELU" },
  "simon": { nom: "Cher Monsieur Simon Pierre KABUAYI" },
  "richardkabasele": { nom: "Cher Monsieur Richard KABASELE" },
  "alphonse": { nom: "Frère Alphonse et beauf" },
  "violette": { nom: "Chère Madame Violette" },
  "bv": { nom: "Cher Monsieur Bienvenu MASUDI" },
  "gaylord": { nom: "Cher Monsieur Gaylord MUSANGU" },
  "magloire": { nom: "Cher madame Ma Gloire NSASI" },
  "beni": { nom: "Cher Monsieur Béni BULATA" },
  "eugene": { nom: "Cher Monsieur BUNGISA" },
  "chirac": { nom: "Cher Monsieur Chirac LUTANDILA" },
  "anthony": { nom: "Cher Monsieur Anthony MANEGABE" },
  "rabby": { nom: "Cher Monsieur Rabby MUFWAME" },
  "eldad": { nom: "Cher Monsieur Eldad NGAMOSOLO" },
  "richard": { nom: "Cher Couple Richard KAPEND" },
  "eddy": { nom: "Cher Monsieur Eddy NGANDJAMB" },
  "martial": { nom: "Cher Monsieur Martial MALANDA" },
  "jemima": { nom: "Cher Mr Justin et Mme Jemima" },
  "plamedie": { nom: "Mrs Plamedie " },
  "jackel": { nom: "Mrs Jackel et Davina" },
  "corneille": { nom: "Cher Monsieur Coreneille TSHIBAMBA" },
  "gustave": { nom: "Cher Monsieur Gustave" },
  "famillekabuya": { nom: "Famille Jean Kabuya" }
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
