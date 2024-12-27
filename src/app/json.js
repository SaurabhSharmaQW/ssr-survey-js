export const json = {
    "pages": [
        {
            "name": "Section 1: Personal Information",
            "elements": [
                {
                    "type": "text",
                    "name": "first_name",
                    "title": "First Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "last_name",
                    "title": "Last Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "email",
                    "title": "Email",
                    "inputType": "email",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "phone_number",
                    "title": "Phone Number",
                    "inputType": "number",
                    "isRequired": false
                }
            ],
            "navigationButtonsVisibility": "show"
        },
        {
            "name": "Section 2: Preferences",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "own_car",
                    "title": "Do you own a car?",
                    "isRequired": true,
                    "choices": [
                        "Yes",
                        "No"
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "car_brand",
                    "title": "What car brand do you own?",
                    "visibleIf": "{own_car} = 'Yes'",
                    "choices": [
                        "Toyota",
                        "BMW",
                        "Honda",
                        "Others"
                    ]
                },
                {
                    "type": "text",
                    "name": "kilometers_per_month",
                    "title": "How many kilometers do you drive per month?",
                    "visibleIf": "{own_car} = 'Yes'",
                    "inputType": "number"
                },
                {
                    "type": "radiogroup",
                    "name": "travel_frequently",
                    "title": "Do you travel frequently for work?",
                    "visibleIf": "{own_car} = 'Yes'",
                    "choices": [
                        "Yes",
                        "No"
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "preferred_transportation",
                    "title": "Which mode of transportation do you prefer?",
                    "visibleIf": "{travel_frequently} = 'Yes'",
                    "choices": [
                        "Flight",
                        "Train",
                        "Car",
                        "Bus"
                    ]
                }
            ],
            "navigationButtonsVisibility": "show"
        },
        {
            "name": "Section 3: Feedback",
            "elements": [
                {
                    "type": "matrix",
                    "name": "feedback_matrix",
                    "title": "Rate the following statements on a scale of 1-5:",
                    "columns": [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    "rows": [
                        "The survey was easy to understand.",
                        "The form interface was intuitive.",
                        "The questions were relevant."
                    ]
                },
                {
                    "type": "file",
                    "name": "file_upload",
                    "title": "Upload a photo of your car or a travel ticket:",
                    "acceptedTypes": ["pdf", "png", "jpg"]
                },
                {
                    "type": "comment",
                    "name": "additional_feedback",
                    "title": "Do you have any additional feedback?",
                    "isRequired": false
                }
            ],
            "navigationButtonsVisibility": "show"
        }
    ]
};
