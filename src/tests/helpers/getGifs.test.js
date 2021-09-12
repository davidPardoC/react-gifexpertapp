import { getGifs } from "../../helpers/getGifs"

describe('getGifs tests', () => {
    test('should retrieve 5 elements', async () => {
        const gifs = await getGifs('goku')
        expect(gifs.length).toBe(5)
    })

    test('should not categoty', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
})
