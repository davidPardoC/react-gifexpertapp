import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("GifGridItem Component", () => {
  const title = "Goku";
  const url = "testUrl";
  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  beforeEach(() => {
    const title = "Goku";
    const url = "testUrl";
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should check text in paragraph ', () => {
      const paragraphText = wrapper.find('p').text().trim()
      expect(paragraphText).toBe(title)
  })

  test('Img shuld have alt and title ', () => {
      const img = wrapper.find('img')
      expect(img.prop('src')).toBe(url)
      expect(img.prop('alt')).toBe(title)
  })

  test('should have card class', () => {
    const div = wrapper.find('div')
    expect(div.prop('className').includes('card')).toBe(true)
  })
  
  
  
});
