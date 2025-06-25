
---
layout: default
title: Store
---

<h2>Shop Our Products</h2>

<!-- Firebase SDK for Ratings -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
<script src="/assets/js/firebase-rating.js"></script>

<div class="store-grid">
  <div class="store-item">
    <img src="/assets/images/product1.jpg" alt="USB Flash Drive 32GB">
    <h3>USB Flash Drive 32GB</h3>
    <p>Durable and fast storage for your movies.</p>
    <strong>KES 800</strong>

    <!-- Snipcart Button -->
    <button class="snipcart-add-item"
      data-item-id="usb-flash-32gb"
      data-item-name="USB Flash Drive 32GB"
      data-item-price="800"
      data-item-url="/store"
      data-item-description="Durable USB storage for files.">
      Add to Cart
    </button>

    <!-- Firebase Ratings -->
    <div class="rating" data-name="USB Flash Drive 32GB">
      <span class="star" data-value="1">&#9733;</span>
      <span class="star" data-value="2">&#9733;</span>
      <span class="star" data-value="3">&#9733;</span>
      <span class="star" data-value="4">&#9733;</span>
      <span class="star" data-value="5">&#9733;</span>
      <span class="rating-result"></span>
    </div>
  </div>
</div>
