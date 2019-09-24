interface Marker {
  location: {
    lat: number;
    lng: number;
  };
  renderContent(): string;
}

export default class Map {
  private readonly map: google.maps.Map;

  constructor(element: Element) {
    this.map = new google.maps.Map(element, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    });
  }

  public addMarker(marker: Marker): void {
    const MARKER = new google.maps.Marker({
      map: this.map,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: marker.renderContent(),
    });

    MARKER.addListener("click", () => {
      infoWindow.open(this.map, MARKER);
    });
  }
}
