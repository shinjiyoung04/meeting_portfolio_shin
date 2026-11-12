"use strict";
// Keep section navigation accessible without depending on JavaScript for content.
const navigation = Array.from(document.querySelectorAll('.site-header nav a'));
const sections = navigation.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.forEach(link => {
        if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -55% 0px'});
  sections.forEach(section => observer.observe(section));
}
