<script>
  const counters = document.querySelectorAll('.stat-item h3');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const speed = 20; // lower = faster

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
</script>
