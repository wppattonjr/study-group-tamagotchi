let fun = 50;

const superFun = () => {
  if (fun < 100) {
    fun += 50;
  } else if (fun >= 100) {
    fun = 100;
  }
  return fun;
};

const slightlyFun = () => {
  if (fun < 100) {
    fun += 2;
  } else if (fun >= 0) {
    fun = 100;
  }
  return fun;
};

const playButtons = () => {
  $('#superFun').on('click', () => {
    $('#fun').html('');
    $('#fun').html(`<div>Fun Score: ${superFun()}</div>`);
  });
  $('#slightlyFun').on('click', () => {
    $('#fun').html('');
    $('#fun').html(`<div>Fun Score: ${slightlyFun()}</div>`);
  });
};

const playQuad = () => {
  const domString = $('#play').html(`
      <div class="card-container" id="play">
          <h1 class="cardHeader">Play</h1>
          <div class="button-group">
              <button id="slightlyFun">Slightly Fun</button>
              <button id="superFun">Super Fun</button>
          </div>
              <div class="fun" id="fun">Fun Score: ${fun}</div>
          </div>
  `);
  playButtons();
  return domString;
};

export default { playQuad };
