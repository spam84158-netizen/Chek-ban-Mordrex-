export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({
success: false,
error: "Method not allowed"
});
}

const { number } = req.body || {};
const clean = String(number || "").replace(/\D/g, "");

if (!clean) {
return res.status(400).json({
success: false,
error: "Numéro manquant"
});
}

const key = process.env.WACHECKER_API_KEY;

if (!key) {
return res.status(500).json({
success: false,
error: "Clé API non configurée"
});
}

try {
const response = await fetch(
"https://api.bulknumberchecker.com/api/v1/lookup?number=" +
encodeURIComponent("+" + clean),
{
headers: {
Authorization: "Bearer " + key,
Accept: "application/json"
}
}
);

const data = await response.json();  

if (!response.ok) {  
  return res.status(response.status).json({  
    success: false,  
    error: data?.error || "Erreur API"  
  });  
}  

const status = String(  
  data?.whatsappStatus ||  
  data?.status ||  
  ""  
).toLowerCase();  

const whatsapp =  
  data?.whatsapp === true ||  
  status === "active" ||  
  status === "valid" ||  
  status === "registered";  

return res.json({  
  success: true,  
  number: "+" + clean,  
  whatsapp,  
  status  
});

} catch (error) {
console.error(error);

return res.status(500).json({  
  success: false,  
  error: "Erreur de connexion à l'API"  
});

}
}
