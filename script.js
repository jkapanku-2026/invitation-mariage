// Firebase déjà initialisé dans data.js

// URL params
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const ADMIN = window.location.search.includes("admin=true");

// Variables RSVP
let presenceChoisie = "";
let boissonsChoisie = [];

// Nom invité
if(!ADMIN){
    if(code && invites[code]){
        document.getElementById("nom").innerText = invites[code].nom;
    }else{
        document.body.innerHTML = "<h2>Invitation non trouvée</h2>";
    }
}else{
    document.getElementById("invitation-pdf").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";

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
            window.excelData.push({
                Nom: d.nom,
                Présence: d.presence,
                Boissons: d.boissons,
                Date: d.date
            });
        }
    });
}

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
        boissonsChoisie = boissonsChoisie.filter(b => b !== val);
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

// 📩 RSVP
function envoyerRSVP(){
    if(!presenceChoisie) return alert("Choisir présence");
    if(presenceChoisie === "Présent" && boissonsChoisie.length === 0)
        return alert("Choisir boisson");

    db.ref("rsvp/" + code).set({
        nom: invites[code].nom,
        presence: presenceChoisie,
        boissons: boissonsChoisie.join(", "),
        date: new Date().toLocaleString()
    });

    alert("Réponse envoyée ✅");
}

// 📸 TÉLÉCHARGER IMAGE (CARTE SEULEMENT)
function downloadImage(){
    const element = document.getElementById("invitation-pdf");
    const section = element.querySelector(".section"); // RSVP
    const btnDownload = element.querySelector(".download"); // bouton

    // cacher éléments inutiles
    if(section) section.style.display = "none";
    if(btnDownload) btnDownload.style.display = "none";

    html2canvas(element,{
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"
    }).then(canvas=>{
        const link = document.createElement("a");
        link.download = "invitation.png";
        link.href = canvas.toDataURL("image/png");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // remettre éléments
        if(section) section.style.display = "block";
        if(btnDownload) btnDownload.style.display = "block";

    }).catch(err=>{
        console.error(err);
        alert("Erreur téléchargement");

        if(section) section.style.display = "block";
        if(btnDownload) btnDownload.style.display = "block";
    });
}

// 📊 EXPORT EXCEL
document.getElementById("exportExcel")?.addEventListener("click",()=>{
    const ws = XLSX.utils.json_to_sheet(window.excelData || []);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "RSVP");
    XLSX.writeFile(wb, "RSVP.xlsx");
});

// 🔄 RESET TABLE
document.getElementById("resetTable")?.addEventListener("click",()=>{
    if(confirm("Voulez-vous vraiment réinitialiser toutes les réponses ?")){
        db.ref("rsvp").remove()
          .then(()=> alert("Table réinitialisée ✅"))
          .catch(err=> alert("Erreur: " + err));
    }
});
