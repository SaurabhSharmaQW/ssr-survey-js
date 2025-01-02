"use client"

import React,{useState,useEffect} from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../app/json";
import { submitSurveyData } from "@/app/lib/backend";

function SurveyComponent() {
    const [surveyModel, setSurveyModel] = useState(null);
  
    useEffect(() => {
      const survey = new Model(json);
      setSurveyModel(survey);
    }, []);
  
    useEffect(() => {
      if (surveyModel) {
        surveyModel.onComplete.add((sender) => {
          submitSurveyData(sender.data)
            .then(() => console.log("Survey data submitted successfully"))
            .catch((error) =>
              console.error("Error submitting survey data:", error)
            );
        });
      }
    }, [surveyModel]);
  
    if (!surveyModel) {
      return null;
    }
  
    return <Survey model={surveyModel} />;
  }

export default SurveyComponent;