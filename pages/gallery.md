
---
layout: default
title: Gallery
---

<h2>Gallery</h2>
<div id="gallery-filters">
  <button onclick="filterGallery('all')">All</button>
  <button onclick="filterGallery('anime')">Anime</button>
  <button onclick="filterGallery('movies')">Movies</button>
  <button onclick="filterGallery('tech')">Tech</button>
</div>

<div class="gallery-grid">
  {% for item in site.data.gallery %}
    <div class="gallery-item" data-category="{{ item.category }}">
      <img src="{{ item.image }}" alt="{{ item.title }}">
      <p>{{ item.title }}</p>
    </div>
  {% endfor %}
</div>

<script>
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
</script>
