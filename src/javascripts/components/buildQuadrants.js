const buildQuandrants = (name, button1, button2, score) => {
  const domString = $(`#${name}`).html(`
    <div class="card-container${name}">
        <h1>${name}</h1>
        <div class="button-group">
            <button id="${button1}">${button1}</button>
            <button id="${button2}">${button2}</button>
        </div>
        <div class="score">${score}</div>
    </div>
`);

  return domString;
};

export default { buildQuandrants };
