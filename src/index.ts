import { Company } from "./Company";
import Map from "./Map";
import { User } from "./User";

const myUser = new User();
const myCompany = new Company();
const mapContainer = document.getElementById("map-container");
const map = new Map(mapContainer);
map.addMarker(myCompany);
map.addMarker(myUser);
