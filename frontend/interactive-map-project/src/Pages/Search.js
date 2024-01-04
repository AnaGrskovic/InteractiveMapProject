import DropMultiSelect from "../Components/DropMultiSelect";
import Box from "@mui/system/Box";
import { Button } from "@mui/material";
import {
  getAllAudiences,
  getAllPlacesOfIntervention,
  getAllMissions,
  getResults,
  getResultsSearch,
} from "../utils/BackendFunctions";
import TextInput from "../Components/TextInput";
import { useEffect, useState, useTransition } from "react";
import ResultCardDisplay from "../Components/ProfessionalResult";
import Map from "../Components/Map";
import { mapNamesToIDs } from "../utils/ArrayFunctions";
import { PopoverWindow } from "../Components/PopoverWindow";
import { useTranslation } from "react-i18next";

export default function Search() {
  const { t } = useTranslation();
  //TODO Task Sondre
  const [northWestLongitude, setNorthWestLongitude] = useState(0);
  const [northWestLatitude, setNorthWestLatitude] = useState(0);
  const [southEastLongitude, setSouthEastLongitude] = useState(0);
  const [southEastLatitude, setSouthEastLatitude] = useState(0);

  const [textSearch, setTextSearch] = useState("");
  const [missionsSelection, setMissionsSelection] = useState([]);
  const [audiencesSelection, setAudiencesSelection] = useState([]);
  const [placesOfInterventionSelection, setPlacesOfInterventionSelection] =
    useState([]);

  const [missions, setMissions] = useState([]);
  const [audiences, setAudiences] = useState([]);
  const [placesOfIntervention, setPlacesOfIntervention] = useState([]);
  const [results, setResults] = useState([]);

  const [selectedProfessional, SetSelectedProfessinoal] = useState(null);
  // on first render
  useEffect(() => {
    getAllPlacesOfIntervention(setPlacesOfIntervention);
    getAllMissions(setMissions);
    getAllAudiences(setAudiences);
  }, []);
  // change to search criteria
  useEffect(() => {
    onSearch();
  }, [
    textSearch,
    missionsSelection,
    audiencesSelection,
    placesOfInterventionSelection,
    northWestLongitude,
    northWestLatitude,
    southEastLongitude,
    southEastLatitude,
  ]);

  const onSearch = function () {
    let success = checkEntries();
    if (success) {
      let audiencesIDs = mapNamesToIDs(audiencesSelection, audiences);
      let placesOfInterventionIDs = mapNamesToIDs(
        placesOfInterventionSelection,
        placesOfIntervention
      );
      let missionsIDS = mapNamesToIDs(missionsSelection, missions);
      getResultsSearch(
        setResults,
        textSearch,
        audiencesIDs,
        placesOfInterventionIDs,
        missionsIDS
      );
    }
  };

  const checkEntries = function () {
    let checkSuccess = true;
    return checkSuccess;
  };

  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              width: 400,
              margin: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "top",
            }}
          >
            <TextInput
              setTextState={setTextSearch}
              label={t("common.search")}
            />
            <DropMultiSelect
              label={t("professional.missions")}
              options={missions.map((item) => item.name)}
              setSelectionState={setMissionsSelection}
            />

            <DropMultiSelect
              label={t("professional.audiences")}
              options={audiences.map((item) => item.name)}
              setSelectionState={setAudiencesSelection}
            />

            <DropMultiSelect
              label={t("professional.placesOfIntervention")}
              options={placesOfIntervention.map((item) => item.name)}
              setSelectionState={setPlacesOfInterventionSelection}
            />
          </Box>
          <Map />
        </Box>
        <ResultCardDisplay
          results={results}
          setSelectedProfessional={SetSelectedProfessinoal}
        />
      </Box>
      <PopoverWindow
        selectedProfessional={selectedProfessional}
      ></PopoverWindow>
    </Box>
  );
}
