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
  $('#healthy').on('click', () => {
    $('#full').html('');
    $('#full').html(`<div>Fullness Score: ${healthy()}</div>`);
  });
  $('#unhealthy').on('click', () => {
    $('#full').html('');
    $('#full').html(`<div>Fulleness Score: ${unhealthy()}</div>`);
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
          <div class="full" id="full">Fullness Score: ${full}</div>
      </div>
  `);
  eatButtons();
  return domString;
};

export default { eatQuad };
