import { LitElement, html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import datas from "../data/data.json";

class CardStory extends LitWithoutShadowDom {
  static properties = {
    datas: { type: Array },
  };

  constructor() {
    super();
    this.datas = datas;
    console.log(this.datas.listStory);
  }

  _dateModifier(createdAt) {
    const tglAwal = new Date(createdAt);
    const hari = tglAwal.getDate();
    const bulan = tglAwal.getMonth() + 1;
    const tahun = tglAwal.getFullYear();
    return `${hari}/${bulan}/${tahun}`;
  }

  render() {
    return html`
      <div class="container row gy-3 pb-5 m-auto">
        ${this.datas.listStory.map(
          ({ id, name, description, photoUrl, createdAt }) => {
            return html`
              <div class="card p-2 g-col-6" id=${id}>
                <div class="card-body">
                  <h5 class="card-title border-bottom py-3">
                    <i class="bi bi-person-circle"></i> | ${name}
                  </h5>
                  <img
                    src=${photoUrl}
                    class="card-img-top p-2"
                    style="max-height: 200px; object-fit: cover"
                    alt="..."
                  />
                  <p class="card-text border-top pt-3">${description}</p>
                  <h5 class="card-subtitle fs-6">
                    -${this._dateModifier(createdAt)}
                  </h5>
                </div>
              </div>
            `;
          }
        )}
      </div>
    `;
  }
}

customElements.define("card-story", CardStory);
