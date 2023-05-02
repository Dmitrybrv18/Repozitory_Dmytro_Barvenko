var sizes = new Array(0, 1, 2, 4, 8, 10, 12, 14);
sizes.pos = 0;

function Elastic() {
  var el = document.getElementById('elastic');
  if (null == el.direction) el.direction = 1;
  else if ((sizes.pos > sizes.length - 2) || (0 == sizes.pos))
    el.direction *= -1;
  el.style.letterSpacing = sizes[sizes.pos += el.direction] + 'px';
  setTimeout(Elastic, 100);
}

Elastic();

