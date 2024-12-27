"use client"

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../app/json";
import { submitForm } from "@/app/actions/action";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        submitForm(sender.data)
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;