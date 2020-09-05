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
  $('#superFun').click(() => {
    $('#fun').html('');
    $('#fun').html(`<div>${superFun()}</div>`);
  });
  $('#slightlyFun').click(() => {
    $('#fun').html('');
    $('#fun').html(`<div>${slightlyFun()}</div>`);
  });
};

const playQuad = () => {
  const domString = $('#play').html(`
      <div class="card-container">
          <h1 class="cardHeader">Play</h1>
          <div class="button-group">
              <button id="superFun">Super Fun</button>
              <button id="slightlyFun">Slightly Fun</button>
          </div>
          <div class="fun" id="fun">${fun}</div>
      </div>
  `);
  playButtons();
  return domString;
};

export default { playQuad };
