let full = 100;

const healthy = () => {
  if (full < 100) {
    full += 10;
  } else if (full >= 100) {
    full = 100;
  }
  return full;
};

const unhealthy = () => {
  if (full > 0) {
    full -= 3;
  } else if (full <= 0) {
    full = 0;
  }
  return full;
};

const eatButtons = () => {
  $('#healthy').click(() => {
    $('#full').html('');
    $('#full').html(`<div>${healthy()}</div>`);
  });
  $('#unhealthy').click(() => {
    $('#full').html('');
    $('#full').html(`<div>${unhealthy()}</div>`);
  });
};

const eatQuad = () => {
  const domString = $('#eat').html(`
      <div class="card-container" id="eat">
          <h1 class="cardHeader">Eat</h1>
          <div class="button-group">
              <button id="unhealthy">Unhealthy</button>
              <button id="healthy">Healthy</button>
          </div>
          <div class="full" id="full">${full}</div>
      </div>
  `);
  eatButtons();
  return domString;
};

export default { eatQuad };
