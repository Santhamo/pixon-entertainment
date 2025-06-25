
---
layout: default
title: Top Rated
---

<h2>Top Rated Products</h2>

<div id="top-rated-list">
  <p>Loading top products...</p>
</div>

<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyCYGlAe79RQyxVQhXsm1u9tn9FfRcofCew",
    authDomain: "pixon-entertainment.firebaseapp.com",
    databaseURL: "https://pixon-entertainment-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pixon-entertainment",
    storageBucket: "pixon-entertainment.firebasestorage.app",
    messagingSenderId: "955382112584",
    appId: "1:955382112584:web:773d7da22707228aeed37d",
    measurementId: "G-N5FVQ63DS1"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  const topRatedList = document.getElementById("top-rated-list");
  db.ref('ratings').once('value', snapshot => {
    let scores = [];
    snapshot.forEach(child => {
      const name = child.key;
      const values = Object.values(child.val());
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      scores.push({ name, avg, count: values.length });
    });

    scores.sort((a, b) => b.avg - a.avg);
    topRatedList.innerHTML = '<ul>' + scores.map(item => 
      `<li><strong>${item.name}</strong>: ${item.avg.toFixed(1)}★ (${item.count} ratings)</li>`).join('') + '</ul>';
  });
</script>
