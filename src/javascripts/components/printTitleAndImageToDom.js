const printImageAndTitle = () => {
  const domString = $('#pet').html(`
        <div class="image-container" id="pet">
        <h1>ANDlighten Tomagotchi</h1>
           <img src=https://lh3.googleusercontent.com/proxy/xo6aWImMor4BSXmhbkc6QkDJF47BzNpeFpDdlwD45oqZDiSWzXW5pOGeGXP-OK1LV0PNgiGVoJoOfSrnhB7gCTYevmlV80Hs8wYkrk9L8uLeaaPAZR5DqUBxnoSKzX8>
        </div>   
 `);
  return domString;
};

export default { printImageAndTitle };
