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


/*var sizes = new Array(0, 1, 2, 4, 8, 10, 12, 14);
sizes.pos = 0;

function Elastic() {
  var el1 = document.getElementById('elastic1');
  var el2 = document.getElementById('elastic2');
  if (null == el1.direction) el1.direction = 1;
  else if ((sizes.pos > sizes.length - 2) || (0 == sizes.pos))
    el1.direction *= -1;
  el1.style.letterSpacing = sizes[sizes.pos += el1.direction] + 'px';
  
  if (null == el2.direction) el2.direction = 1;
  else if ((sizes.pos > sizes.length - 2) || (0 == sizes.pos))
    el2.direction *= -1;
  el2.style.letterSpacing = sizes[sizes.pos += el2.direction] + 'px';
  
  setTimeout(Elastic, 100);
}

Elastic();*/


