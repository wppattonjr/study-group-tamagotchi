let energy = 50;

const nap = () => {
  if (energy < 100) {
    energy += 50;
  } else if (energy >= 100) {
    energy = 100;
  }
  return energy;
};

const deepSlumber = () => {
  if (energy < 100) {
    energy += 60;
  } else if (energy >= 100) {
    energy = 100;
  }
  return energy;
};

const sleepButtons = () => {
  $('#nap').click(() => {
    $('#energy').html('');
    $('#energy').html(`<div>${nap()}</div>`);
  });
  $('#deepSlumber').click(() => {
    $('#energy').html('');
    $('#energy').html(`<div>${deepSlumber()}</div>`);
  });
};

const sleepQuad = () => {
  const domString = $('#sleep').html(`
      <div class="card-container" id="sleep">
          <h1 class="cardHeader">Sleep</h1>
          <div class="button-group">
              <button id="nap">Nap</button>
              <button id="deepSlumber">Deep Slumber</button>
          </div>
          <div class="energy" id="energy">${energy}</div>
      </div>
  `);
  sleepButtons();
  return domString;
};

export default { sleepQuad };
