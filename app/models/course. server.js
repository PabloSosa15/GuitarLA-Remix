export async function getCourse() {
    const answer = await fetch(`${process.env.API_URL}/api/course?populate=image`)
    return await answer.json()
}