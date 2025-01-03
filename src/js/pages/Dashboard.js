import datas from "../data/data.json";
const Dashboard = {
  async init() {
    this._testMe();
    await this._initialData();
  },

  _testMe() {
    console.log("Beranda");
  },

  async _initialData(datas) {
    return `
    <div class="card p-2 g-col-6" id=${datas.id}>
                <div class="card-body">
                  <h5 class="card-title border-bottom py-3">
                    <i class="bi bi-person-circle"></i> | ${datas.name}
                  </h5>
                  <img
                    src=${datas.photoUrl}
                    class="card-img-top p-2"
                    style="max-height: 200px; object-fit: cover"
                    alt="..."
                  />
                  <p class="card-text border-top pt-3">${datas.description}</p>
                  <h5 class="card-subtitle fs-6">
                    -${this._dateModifier(datas.createdAt)}
                  </h5>
                </div>
              </div>
    `;
  },
};

export default Dashboard;
