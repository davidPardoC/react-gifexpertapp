import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("AddCategory Components", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should match to snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change input value", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Punch" } });
  });

  test("should NOT post info on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call set categories and cleant text input", () => {
    const value = "Goku";
    wrapper.find("input").simulate("change", { target: { value } });
    expect(wrapper.find("input").prop("value")).toBe(value);
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
