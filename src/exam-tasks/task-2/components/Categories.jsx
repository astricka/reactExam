import css from './Categories.module.css';

function Categories() {
    return(
      <main>
          <h1>Categories</h1>
          <div className={css.container}>
              <div>
                  <img src="images/posters.jpg" alt="posters"/>
                  <h4>POSTERS</h4>
              </div>
              <div>
                  <img src="images/apparel.jpg" alt="apparel"/>
                  <h4>APPAREL</h4>
              </div>
              <div>
                  <img src="images/stickers.jpg" alt="stickers"/>
                  <h4>STICKERS</h4>
              </div>
              <div>
                  <img src="images/cups.jpg" alt="cups"/>
                  <h4>CUPS</h4>
              </div>
              <div>
                  <img src="images/calendars.jpg" alt="calendars"/>
                  <h4>CALENDARS</h4>
              </div>
          </div>
      </main>
    );
}

export default Categories;