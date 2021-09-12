import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp'
describe('GifExpertApp Component', () => {


    test('should match snapshot ', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('should render a list of categories', () => {
        const categories = ['Goku', 'Naruto']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
    
})
