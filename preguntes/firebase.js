// Importa els SDKs que necessites
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, updateDoc, doc, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuració de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdR5qi9HjIMRLs2VcXoTjZCgY4e_TZNdw",
  authDomain: "preguntes-c5d57.firebaseapp.com",
  projectId: "preguntes-c5d57",
  storageBucket: "preguntes-c5d57.firebasestorage.app",
  messagingSenderId: "902732242066",
  appId: "1:902732242066:web:51507041b153ab3cedda4b",
  measurementId: "G-C9SLYRLJM9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const preguntesRef = collection(db, "preguntes");

// Referències al DOM
const form = document.getElementById("form");
const input = document.getElementById("input");
const llista = document.getElementById("llista");

// Afegir pregunta
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  await addDoc(preguntesRef, {
    text,
    completada: false,
    timestamp: serverTimestamp()
  });
  input.value = "";
});

// Escolta en temps real
onSnapshot(query(preguntesRef, orderBy("timestamp")), (snapshot) => {
  llista.innerHTML = "";
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = data.completada;
    const span = document.createElement("span");
    span.textContent = data.text;

    if (data.completada) {
      li.classList.add("completed");
    }

    checkbox.addEventListener("change", () => {
      updateDoc(doc(db, "preguntes", docSnap.id), {
        completada: checkbox.checked
      });
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    llista.appendChild(li);
  });
});
