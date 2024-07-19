import { render, screen } from "@testing-library/svelte"
import type { ItemInterface } from "@/models/items/Item.interface"
import component from "./Item.component.svelte"

describe("Item.component:rendering", () => {
  it("renders an Item test correctly", () => {
    const item: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false,
    }

    const testid = "unit-test-appearance-2"
    render(component, {
      testid,
      item,
    })

    const liElement = screen.getByTestId(testid)
    expect(liElement).not.toBeNull()
    expect(liElement.innerHTML).toContain("Unit test item 1")
  })

  it("has expected css class when selected is true", () => {
    const item: ItemInterface = {
      id: 1,
      name: "Unit test item 2",
      selected: true,
    }
    const testid = "unit-test-appearance-2"
    render(component, { testid, item })

    const liElement = screen.getByTestId(testid)
    expect(liElement).not.toBeNull()
    expect(liElement.className).toContain("selected")
  })

  it("has expected css class when selected is false", () => {
    const item: ItemInterface = {
      id: 1,
      name: "Unit test item 3",
      selected: false,
    }
    const testid = "unit-test-appearance-3"
    render(component, { testid, item })

    const liElement = screen.getByTestId(testid)
    expect(liElement).not.toBeNull()
    expect(liElement.className).not.toContain("selected")
  })
})
