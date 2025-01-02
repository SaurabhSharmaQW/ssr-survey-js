import db from "@/config/db";

export async function POST(req, res) {
    // if (req.method === "POST") {
        console.log(req,'req from index.js');
        
        try {
            const surveyData = await req.json();
            
            const query = "INSERT INTO tbl_ssr_response SET ?";
            const [result] = await db.query(query, surveyData);
    
            return new Response({
                status: 200,
                message: "true",
                // result: result,
            });
        } catch (error) {
            console.log(error,'17');
    
            return new Response({
                status: 500,
                message: error,
            });
        }
    // }
}