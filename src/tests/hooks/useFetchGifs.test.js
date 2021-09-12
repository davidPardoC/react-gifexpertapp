import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'
describe('useFetchGifs', () => {
    test('should return initial state ', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('Goku'))
        const {data:images, loading} = result.current;
        await waitForNextUpdate()
        expect(images.length).toBe(0)
        expect(loading).toBe(true)
    })

    test('should return images', async () => {
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('Goku'))
        await waitForNextUpdate()
        const {data:images, loading} = result.current;
        expect(images.length).toBe(5)
        expect(loading).toBe(false)
    })
    
    
})
