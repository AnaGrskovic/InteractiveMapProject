import InitGetter from "../Components/InitGetter";
import axios from "axios";
import {
  Address,
  ContactPerson,
  GeoLocation,
  Professional,
  dummyProf,
  professionalFromJSON,
} from "./Entities";

export function getAllMissions(setReturn) {
  let url = "https://localhost:7212/api/field-of-intervention/mission/all";
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      setReturn(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export function getAllAudiences(setReturn) {
  let url = "https://localhost:7212/api/field-of-intervention/audience/all";
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      setReturn(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export function getAllPlacesOfIntervention(setReturn) {
  let url =
    "https://localhost:7212/api/field-of-intervention/place-of-intervention/all";
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      setReturn(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export function addNewProfessional(professional) {
  let url = "https://localhost:7212/api/professional";

  axios
    .post(url, professional.toJSON())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error Posting Professional:", error.response);
    });
}

export function approveProfessional(professional, callback) {
  new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
    callback();
    console.log(professional.name + " was approved");
  });
}

export function declineProfessional(professional, callback) {
  new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
    callback();
    console.log(professional.name + " was declined");
  });
}

export function getResultsSearch(
  setResults,
  textSearch = "",
  audiencesIDs = [],
  placesOfInterventionIDs = [],
  missionIDs = []
) {
  let data = {};
  if (!textSearch.length == 0) {
    data.text = textSearch;
  }
  if (!audiencesIDs.length == 0) {
    data.audiences = audiencesIDs;
  }
  if (!missionIDs.length == 0) {
    data.missions = missionIDs;
  }
  if (!placesOfInterventionIDs.length == 0) {
    data.placesOfIntervention = placesOfInterventionIDs;
  }
  console.log("Data send to backend on search");
  console.log(data);

  let url = "https://localhost:7212/api/professional/approved/filtered";
  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
    })
    .then((response) => {
      let professionals = response.data.map((profData) => {
        return professionalFromJSON(profData);
      });
      setResults(professionals);
    })
    .catch((error) => {
      console.error("Error sending post for search:", error);
    });
}
