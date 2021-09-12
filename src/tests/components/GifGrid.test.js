import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom'
jest.mock("../../hooks/useFetchGifs");
describe("GifGrid component", () => {
  let category = "Goku";
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });
  let wrapper = shallow(<GifGrid category={category} />);
  beforeEach(() => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    wrapper = shallow(<GifGrid category={category} />);
  });

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render items on data", () => {
    const gifs = [{ id: "ABC", url: "testUrl", title: "test" },{ id: "ABC123", url: "testUrl", title: "test" }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  });
});
