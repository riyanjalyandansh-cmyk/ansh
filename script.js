document.addEventListener('DOMContentLoaded', () => {
  // Initialize Hero Line Graph (Chart.js Line Chart)
  const ctx1 = document.getElementById('heroChart').getContext('2d');
  // Create a horizontal gradient for the line stroke (purple to pink)
  const gradientStroke = ctx1.createLinearGradient(0, 0, 800, 0);
  gradientStroke.addColorStop(0, '#a259ff');
  gradientStroke.addColorStop(1, '#f25767');
  new Chart(ctx1, {
    type: 'line',
    data: {
      // Dummy labels and data for visual effect (not displayed on axes)
      labels: Array.from({ length: 12 }, (_, i) => i + 1),
      datasets: [{
        data: [20, 40, 15, 60, 30, 80, 25, 70, 50, 90, 40, 75],  // sample points
        borderColor: gradientStroke,
        borderWidth: 3,
        tension: 0.4,       // curve the line (smooth tension)
        pointRadius: 0,     // no points, just line
        fill: false         // no fill under the line
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 5,       // make the chart very wide and short
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });

  // Initialize Monthly Viewership Bar Chart
  const ctx2 = document.getElementById('barChart').getContext('2d');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [{
        data: [95, 110, 90, 120, 100, 105],  // sample data (e.g., millions of views)
        backgroundColor: ['#4fc3f7', '#1de9b6', '#b388ff', '#ff8a65', '#4fc3f7', '#1de9b6'],
        borderRadius: 4   // rounded corners on bars
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 2,    // wider chart for better readability
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      scales: {
        x: {
          ticks: { color: '#aaa' },
          grid: { display: false }
        },
        y: {
          display: false,
          grid: { display: false }
        }
      }
    }
  });

  // Intersection Observer for scroll reveal animations
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to trigger fade-in CSS transition
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);  // stop observing once element has appeared
      }
    });
  }, { threshold: 0.2 });
  // Observe all elements that should fade in
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
