let strength = 100;

const runningAway = () => {
  if (strength < 100) {
    strength += 1;
  } else if (strength >= 100) {
    strength = 100;
  }
  return strength;
};

const commitViolence = () => {
  if (strength > 0) {
    strength -= 10;
  } else if (strength <= 0) {
    strength = 0;
  }
  return strength;
};

const fightButtons = () => {
  $('#runningAway').click(() => {
    $('#strength').html('');
    $('#strength').html(`<div>${runningAway()}</div>`);
  });
  $('#commitViolence').click(() => {
    $('#strength').html('');
    $('#strength').html(`<div>${commitViolence()}</div>`);
  });
};

const fightQuad = () => {
  const domString = $('#fight').html(`
      <div class="card-container">
          <h1 class="cardHeader">Fight</h1>
          <div class="button-group">
              <button id="runningAway">Bravely Running Away</button>
              <button id="commitViolence">Committing Violence</button>
          </div>
          <div class="strength" id="strength">${strength}</div>
      </div>
  `);
  fightButtons();
  return domString;
};

export default { fightQuad };
