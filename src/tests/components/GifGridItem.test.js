import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("GifGridItem Component", () => {
  let wrapper = shallow(<GifGridItem />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem />);
  });

  test("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot()
  });
});
