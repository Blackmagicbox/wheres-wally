import { address, name } from "faker";

export class User {
  public name: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = name.firstName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  public renderContent() {
    return `${this.name} is here!`;
  }
}
