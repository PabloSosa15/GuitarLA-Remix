export async function getGuitars() {
    const answer = await fetch(`${process.env.API_URL}/api/guitars?populate=image`);
    return await answer.json()
}

export async function getGuitar(url) {
    const answer = await fetch(`${process.env.API_URL}/api/guitars?filters[url]=${url}&populate=image`)
    return await answer.json()


}

