
// Firebase Configuration
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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.rating').forEach(rating => {
    const name = rating.dataset.name;
    const stars = rating.querySelectorAll('.star');
    const result = rating.querySelector('.rating-result');

    // Display current average rating
    db.ref('ratings/' + name).on('value', snapshot => {
      let data = snapshot.val();
      if (data) {
        let ratings = Object.values(data);
        let average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        result.textContent = `Average: ${average.toFixed(1)}★ (${ratings.length})`;
        stars.forEach((star, index) => {
          star.style.color = (index < Math.round(average)) ? '#f90' : '#ccc';
        });
      }
    });

    // Handle rating submission
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = parseInt(star.dataset.value);
        db.ref('ratings/' + name).push(value);
      });
    });
  });
});
