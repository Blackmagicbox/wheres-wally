import { address, company } from "faker";

export class Company {
  public name: string;
  public catchPhrase: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }
  public renderContent() {
    return `
      <div>
        <h3>${this.name}</h3>
        <p>${this.catchPhrase}</p>
      </div>
    `;
  }
}
