import db from "@/config/db";
// import db from "../../../config/db";

export async function POST(req, res) {
    try {
        
        const surveyData = await req.json();

        const query = `
            INSERT INTO tbl_survey_response (
                preferred_transportation,
                own_car,
                kilometers_per_month,
                last_name,
                car_brand,
                phone_number,
                travel_frequently,
                first_name,
                email,
                feedback_matrix,
                additional_feedback,
                image
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // Prepare the values to be inserted
        const values = [
            surveyData.preferred_transportation || '',
            surveyData.own_car || 'No',
            surveyData.kilometers_per_month || 0,
            surveyData.last_name,
            surveyData.car_brand || '',
            surveyData.phone_number || 908920890,
            surveyData.travel_frequently || 'No',
            surveyData.first_name,
            surveyData.email,
            surveyData.feedback_matrix || '',
            surveyData.additional_feedback || null, // Optional field
            surveyData.image || null               // Optional field
        ];

    
        const [result] = await db.query(query, values);
        console.log(result);

        return new Response(
            JSON.stringify({
                status: 200,
                message: "Record inserted successfully",
                result: result,
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error(error, 'Error in POST handler');
        return new Response(
            JSON.stringify({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
            }),
            { status: 500 }
        );
    }
}
