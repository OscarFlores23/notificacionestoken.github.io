// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyCzCHCjkJJ4-YDo6m4R_-8uw23PccILAJ4",
  authDomain: "pwa-oscar.firebaseapp.com",
  projectId: "pwa-oscar",
  storageBucket: "pwa-oscar.firebasestorage.app",
  messagingSenderId: "419478045355",
  appId: "1:419478045355:web:67e935fe8093abd7022dee"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "/icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});